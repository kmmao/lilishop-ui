<template>
  <div class="model-view">
    <div class="model-view-content">
      <div class="content">
        <div class="wap-title">首页</div>
        <div class="draggable">
          <!-- 弹窗广告 -->
          <div class="window-shadow">
            <img :src="advertising[0].img" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="model-config">
      <div class="decorate">
        <div class="decorate-title">弹窗广告</div>

        <div class="decorate-list">
          <div
            class="decorate-item"
            v-for="(item, index) in advertising"
            :key="index"
          >
            <div class="decorate-item-title">
              <div>设置</div>
            </div>
            <div class="decorate-item-box">
              <!-- 选择照片 -->
              <div class="decorate-view">
                <div class="decorate-view-title">选择图片</div>
                <div>
                  <img class="show-image" :src="item.img" alt />
                  <input
                    type="file"
                    class="hidden-input"
                    @change="changeFile(item, index)"
                    ref="files"
                    :id="'files' + index"
                  />
                  <div class="tips">
                    建议尺寸
                    <span>{{ item.size }}</span>
                  </div>
                </div>
                <div class="selectBtn">
                  <Button
                    size="small"
                    @click="handleClickFile(item, index)"
                    ghost
                    type="primary"
                    >选择链接</Button
                  >
                </div>
              </div>

              <!-- 选择连接 -->
              <div class="decorate-view">
                <div class="decorate-view-title">选择图片</div>
                <div>
                  <Button
                    ghost
                    type="primary"
                    size="small"
                    @click="clickLink(item)"
                    >选择链接</Button
                  >
                </div>
              </div>

              <div class="decorate-view">
                <div class="decorate-view-title">当前页面状态</div>
                <div>
                  <Tag :type="result.pageShow === 'OPEN'  ? 'green' : 'red'">{{result.pageShow === 'OPEN' ? '开启' : '关闭'}}</Tag>
                </div>
              </div>
            </div>
          </div>
        </div>
        <liliDialog
          ref="liliDialog"
          @selectedLink="selectedLink"
          :types="linkType"
        ></liliDialog>
      </div>
      <Modal width="1200px" v-model="picModelFlag">
      <ossManage @callback="callbackSelected" :isComponent="true" :initialize="picModelFlag" ref="ossManage" />
    </Modal>
    </div>
  </div>
</template>
<script>
import ossManage from "@/views/sys/oss-manage/ossManage";
import * as API_Other from "@/api/other.js";
export default {
   components: {
    ossManage,
  },
  data() {
    return {
      result:"",
      picModelFlag: false, //图片选择器
      type: "full", // 展示方式
      //全屏广告
      advertising: [
        {
          img:
            "https://shopro-1253949872.file.myqcloud.com/uploads/20200704/9136ecddcddf6607184fab689207e7e3.png",
          size: "612*836",
        },
      ],
      linkType: "", // 选择类型
      selectedLinks: {},
    };
  },

  watch: {
    advertising: {
      handler(val) {
        this.$store.state.openStyleStore = val;
        console.log(
          "this.$store.state.openStyleStore",
          this.$store.state.openStyleStore
        );
      },
      deep: true,
    },
  },
  mounted() {
    this.openPage();
  },
  methods: {
    // 回调选择的链接
    selectedLink(val) {
      this.selectedLinks.url = val;

      this.advertising[0].config = val;
    },
    openPage() {
      const alertType = this.$route.query.pagetype;
      const pageType = {
        INDEX: "INDEX",
        ALERT: "OPEN_SCREEN_PAGE",
        OPEN_SCREEN_ANIMATION: "OPEN_SCREEN_ANIMATION",
      }[alertType ? alertType : "INDEX"];

      API_Other.getOpenHomeData(pageType).then((res) => {
        this.$store.state.openStoreId = res.result.id;
        res.result.pageData
          ? this.$set(this, "advertising", [JSON.parse(res.result.pageData)])
          : "";
        this.result = res.result
      });
    },
    // 图片选择器回显
    callbackSelected(val) {
      this.picModelFlag = false;
      this.advertising[0].img = val.url;
    },
    // 点击选择图片
    handleClickFile(item, index) {
      this.$refs.ossManage.selectImage = true;
      this.picModelFlag = true;
    },
    // 点击链接
    clickLink(item) {
      this.$refs.liliDialog.open('link')
    },
    //点击图片解析成base64
    changeFile(item, index) {
      const file = document.getElementById("files" + index).files[0];
      if (file == void 0) return false;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      this.$nextTick((res) => {
        reader.onload = (e) => {
          item.img = e.target.result;
        };
      });
    },

  },
};
</script>
<style scoped lang="scss">
@import "./style.scss";
@import "./decorate.scss";
.decorate-radio {
  margin: 10px 0;
}
.window-shadow,
.full-shadow {
  display: flex;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  left: 0;
  align-items: center;
  justify-content: center;
}
.window-shadow {
  > img {
    width: 306px;
    height: 418px;
  }
}
.full-shadow {
  > img {
    width: 100%;
    height: 100%;
  }
}
.draggable {
  position: relative;
}

.btn-item {
  > img {
    margin: 4px 0;
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }
}
</style>
