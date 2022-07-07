import { shortcut } from '@core/decorator';
import './footer.less';

@shortcut()
export class LayoutFooter extends BI.Widget {
    static xtype = 'app.layout_footer';

    public props = {
        baseCls: 'app-layout-footer',
    };

    public render() {
        return (
            <BI.CenterAdaptLayout>
                <BI.VerticalLayout cls={'footer_main'}>
                    <BI.HorizontalAdaptLayout cls={'links'} horizontalAlign={'left'}>
                        <BI.A href="https://cnodejs.org/rss" text={'RSS'} cls={'a'}></BI.A>
                        <BI.Label text=" | "></BI.Label>
                        <BI.A href="https://github.com/cnodejs/nodeclub/" text={'源码地址'} cls={'a'}></BI.A>
                    </BI.HorizontalAdaptLayout>
                    <BI.Label text="CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。" textAlign="left" cls={'la'} />
                    <BI.HorizontalAdaptLayout horizontalAlign={'left'} cls={'tw'}>
                        <BI.Text text="服务器搭建在 " cls={'tt'}></BI.Text>
                        <BI.A
                            href="https://www.digitalocean.com/?refcode=eba02656eeb3"
                            el={
                                <BI.DefaultLayout>
                                    <BI.Img src="https://static2.cnodejs.org/public/images/digitalocean.png" width={92} height={58.938}></BI.Img>
                                </BI.DefaultLayout>
                            }
                        ></BI.A>
                        <BI.Text text="，存储赞助商为 " cls={'tt'}></BI.Text>
                        <BI.A
                            href="https://www.qiniu.com/?ref=cnode"
                            el={
                                <BI.DefaultLayout>
                                    <BI.Img src="https://static2.cnodejs.org/public/images/qiniu.png" width={115} height={53.67} cls={'qn'}></BI.Img>
                                </BI.DefaultLayout>
                            }
                        ></BI.A>
                    </BI.HorizontalAdaptLayout>
                    <BI.HorizontalAdaptLayout horizontalAlign={'left'} cls={'th'}>
                        <BI.Label text={'新手搭建 Node.js 服务器，推荐使用无需备案的 '} cls={'thla'} textAlign="left"></BI.Label>
                        <BI.A
                            href="https://www.digitalocean.com/?refcode=eba02656eeb3"
                            cls={'thweb'}
                            text={'DigitalOcean(https://www.digitalocean.com/)'}
                        ></BI.A>
                    </BI.HorizontalAdaptLayout>
                </BI.VerticalLayout>
            </BI.CenterAdaptLayout>
        );
    }
}
