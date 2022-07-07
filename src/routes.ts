import { Widget } from '@fui/core';
import { Dashboard } from '@card/dashboard/dashboard';
import { Rookie } from './modules/card/rookie/rookie';
import { Api } from './modules/card/Api/api';
// 路由类型
export enum RouteType {
    Single,
    Multiple,
}

// 路由信息
export interface RouteInfo {
    type?: RouteType;
    value: string;
    text: string;
    icon: string;
    card?: typeof Widget;
    cards?: RouteInfo[];
    children?: RouteInfo[];
}

/*
 *  路由映射信息，配置说明：
 *  1.顶层路由将作为一级菜单，第二层及更深层路由将作为二级菜单
 *  2.为顶层路由配置type属性
 *    2.1 RouteType.Single: 每个二级菜单选项对应一个card，导航标签可关闭，其形式类似BI的目录页面
 *    2.2 RouteType.Multiple: 每个二级菜单选项对应多个card，导航标签不可关闭，其形式类似BI的管理系统页面
 *  3.路由公共配置如下：
 *    3.1 value: 路由的唯一索引
 *    3.2 text: 路由对应的菜单项名称和导航标签名称
 *    3.3 icon: 路由对应的菜单项图标
 *    3.4 children: 路由的子路由
 *    3.5 card|cards:
 *      3.5.1 card: 顶层路由的type为RouteType.Single时可用，表示该路由对应的单个card
 *      3.5.2 cards: 顶层路由的type为RouteType.Multiple时可用，表示该路由对应的多个card
 *      3.5.3 顶层路由的card表示一级菜单对应的默认card
 */
export const ROUTE_INFOS: RouteInfo[] = [
    {
        type: RouteType.Single,
        value: 'dashboard',
        text: '首页',
        icon:'',
        card: Dashboard,
    },
    {
        type: RouteType.Single,
        value: 'rookie',
        text: '新手入门',
        icon:'',
        card: Rookie,
    },
    {
        type: RouteType.Single,
        value: 'api',
        text: 'API',
        icon:'',
        card: Api,
    },{
        type: RouteType.Single,
        value: 'about',
        icon:'',
        text: '关于',
    },{
        type: RouteType.Single,
        value: 'register',
        icon:'',
        text: '注册',
    },
    {
        type: RouteType.Single,
        value: 'login',
        icon:'',
        text: '登录',
    },

];
