/*
 * @Author: liukai liukai@quanwu.info
 * @Date: 2022-10-08 20:19:21
 * @LastEditors: liukai liukai@quanwu.info
 * @LastEditTime: 2022-10-18 15:03:05
 * @FilePath: /lilishop-ui/buyer/public/config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var BASE = {
    /**
     * @description api请求基础路径
     */
    API_DEV: {
      // common: "http://localhost:8890",
      // buyer: "http://localhost:8888",
      // seller: "http://localhost:8889",
      // manager: "http://localhost:8887"
      common: "https://common-api.zmshops.xycloud.info",
      buyer: "https://buyer-api.zmshops.xycloud.info",
      seller: "https://store-api.zmshops.xycloud.info",
      manager: "https://admin-api.zmshops.xycloud.info"
    },
    API_PROD: {
      // common: "https://common-api.zmshops.xycloud.info",
      // buyer: "https://buyer-api.zmshops.xycloud.info",
      // seller: "https://store-api.zmshops.xycloud.info",
      // manager: "https://admin-api.zmshops.xycloud.info"
      common: "https://manager.zmshops.zmddg.com/common-api",
      buyer: "https://manager.zmshops.zmddg.com/buyer-api",
      seller: "https://manager.zmshops.zmddg.com/store-api",
      manager: "https://manager.zmshops.zmddg.com/admin-api"
    },
  };
