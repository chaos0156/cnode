import { shortcut } from '@core/decorator';
import './main.less';

@shortcut()
export class LayoutMain extends BI.Widget {
    static xtype = 'app.layout_rookie_main';

    public props = {
        baseCls: 'app-layout-rookie-main',
    };

    public render() {
        return (
            <BI.VerticalLayout>
                <BI.VerticalAdaptLayout textAlign="left" cls={'header'}>
                    <BI.A text={'主页'} cls={'app-layout-rookie-a'}></BI.A>
                    <BI.Label text="/" cls="app-layout-rookie-mid"></BI.Label>
                    <BI.Label text=" Node.js 新手入门" cls="app-layout-rookie-la"></BI.Label>
                </BI.VerticalAdaptLayout>
                <BI.VerticalLayout cls='topic'>
                    <BI.Label text='Node.js 入门' cls='h2' textAlign='left'></BI.Label>
                    <BI.Label text='《汇智网 Node.js 课程》' textAlign='left' cls='strong'></BI.Label>
                    <BI.A href='http://www.hubwiz.com/course/?type=nodes' text={'http://www.hubwiz.com/course/?type=nodes'} cls='url'></BI.A>
                    <BI.Label text='《快速搭建 Node.js 开发环境以及加速 npm》' textAlign='left' cls='strong'></BI.Label>
                    <BI.A href='http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html' text={'http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html'} cls='url'></BI.A>
                    <BI.Label text='《Node.js 包教不包会》' textAlign='left' cls='strong'></BI.Label>
                    <BI.A href='https://github.com/alsotang/node-lessons' text={'https://github.com/alsotang/node-lessons'} cls='url'></BI.A>
                    <BI.Label text='《ECMAScript 6入门》' textAlign='left' cls='strong'></BI.Label>
                    <BI.A href='http://es6.ruanyifeng.com/' text={'http://es6.ruanyifeng.com/'} cls='url'></BI.A>
                    <BI.Label text='《七天学会NodeJS》' textAlign='left' cls='strong'></BI.Label>
                    <BI.A href='https://github.com/nqdeng/7-days-nodejs' text={'https://github.com/nqdeng/7-days-nodejs'} cls='url'></BI.A>
                    <BI.Label text='《Node入门-一本全面的Node.js教程》' textAlign='left' cls='strong'></BI.Label>
                    <BI.A href='http://www.nodebeginner.org/index-zh-cn.html' text={'http://www.nodebeginner.org/index-zh-cn.html'} cls='url'></BI.A>
                    <BI.Label text='Node.js 资源' cls='h2' textAlign='left'></BI.Label>
                    <BI.Label text='《node weekly》' textAlign='left' cls='strong'></BI.Label>
                    <BI.A href='http://nodeweekly.com/issues' text={'http://nodeweekly.com/issues'} cls='url'></BI.A>
                    <BI.Label text='《node123-node.js中文资料导航》' textAlign='left' cls='strong'></BI.Label>
                    <BI.A href='https://github.com/youyudehexie/node123' text={'https://github.com/youyudehexie/node123'} cls='url'></BI.A>
                    <BI.Label text='《A curated list of delightful Node.js packages and resources》' textAlign='left' cls='strong'></BI.Label>
                    <BI.A href='https://github.com/sindresorhus/awesome-nodejs' text={'https://github.com/sindresorhus/awesome-nodejs'} cls='url'></BI.A>
                    <BI.Label text='《Node.js Books》' textAlign='left' cls='strong'></BI.Label>
                    <BI.A href='https://github.com/pana/node-books' text={'https://github.com/pana/node-books'} cls='url'></BI.A>
                    <BI.Label text='Node.js 名人' cls='h2' textAlign='left'></BI.Label>
                    <BI.Label text='《名人堂》' textAlign='left' cls='strong'></BI.Label>
                    <BI.A href='https://github.com/cnodejs/nodeclub/wiki/名人堂' text={'https://github.com/cnodejs/nodeclub/wiki/名人堂'} cls='url'></BI.A>
                    <BI.Label text='Node.js 服务器' cls='h2' textAlign='left'></BI.Label>
                    <BI.HorizontalAdaptLayout horizontalAlign={'left'} cls='listlast' >
                        <BI.Label text={'新手搭建 Node.js 服务器，推荐使用无需备案的 '}  textAlign="left"></BI.Label>
                        <BI.A
                            href="https://www.digitalocean.com/?refcode=eba02656eeb3"
                            text={'DigitalOcean(https://www.digitalocean.com/)'}
                        ></BI.A>
                    </BI.HorizontalAdaptLayout>
                </BI.VerticalLayout>
            </BI.VerticalLayout>
        );
    }
}
