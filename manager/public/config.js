/*
 * @Author: liukai liukai@quanwu.info
 * @Date: 2022-10-08 20:19:21
 * @LastEditors: liukai liukai@quanwu.info
 * @LastEditTime: 2023-03-12 22:53:42
 * @FilePath: /lilishop-ui/manager/public/config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var BASE = {
    /**
     * @description api请求基础路径
     */
    API_DEV: {
      common: "https://common-api.zmshops.xycloud.info",
      buyer: "https://buyer-api.zmshops.xycloud.info",
      seller: "https://store-api.zmshops.xycloud.info",
      manager: "https://admin-api.zmshops.xycloud.info",
      //  manager: "http://192.168.0.120:8887",
      //  common: "http://192.168.0.120:8890",


    },
    API_PROD: {
      common: "https://common-api.zmshops.xycloud.info",
      buyer: "https://buyer-api.zmshops.xycloud.info",
      seller: "https://store-api.zmshops.xycloud.info",
      manager: "https://admin-api.zmshops.xycloud.info"
    },
    /**
     * @description // 跳转买家端地址 pc端
     */
    PC_URL: "https://buyer.zmshops.xycloud.info",
    /**
     * @description  // 跳转买家端地址 wap端
     */
    WAP_URL: "https://h5.zmshops.xycloud.info",
    /**
     *  @description api请求基础路径前缀
     */
    PREFIX: "/manager"
  };
