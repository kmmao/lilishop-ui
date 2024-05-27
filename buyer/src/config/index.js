/*
 * @Author: liukai liukai@quanwu.info
 * @Date: 2022-10-08 20:19:21
 * @LastEditors: liukai liukai@quanwu.info
 * @LastEditTime: 2023-03-01 00:06:09
 * @FilePath: /lilishop-ui/buyer/src/config/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

const Cookie = require('js-cookie')
module.exports = {
  title:Cookie.get('siteName') || 'zmddgshop', //配置显示在浏览器标签的title、底部信息、部分信息展示的值
  icpCard: "", // icp证
  company: {
    href: "https://www.zmddg.com",
    name: "厦门攒米科技有限公司",
  }, //公司信息
  icpMessage: "京ICP备20009696号-1", //icp备案
  /**
   * 高德地图申请链接
   * https://lbs.amap.com/api/javascript-api/guide/abc/prepare
   * 添加成功后，可获取到key值和安全密钥jscode（自2021年12月02日升级，升级之后所申请的 key 必须配备安全密钥 jscode 一起使用)
   */
  //FIXME 请检查当前高德key创建的日期，如果2021年12月02日之前申请的 无需填写安全密钥
  aMapSecurityJsCode:"2bd0fbf621881f4c77be74f0e76495f3", // 高德web端js申请的安全密钥
  aMapKey: "7f11113750315d8543daaf5c3ba353ca", //高德web端js申请的api key
  aMapSwitch:false, //是否开启高德定位
  enableCDN: true, //生产环境 是否启用cdn加载 vue等js
  port: 10000, //端口
  inputMaxLength:'140', //全局输入框默认最大输入长度字


  PC_DOMAIN: "https://pc-b2b2c.pickmall.cn", // PC端域名
  WAP_DOMAIN: "https://m-b2b2c.pickmall.cn", // WAP端域名
};
