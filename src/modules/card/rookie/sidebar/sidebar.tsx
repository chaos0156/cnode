import { shortcut } from '@core/decorator';
import './sidebar.less';

@shortcut()
export class LayoutSideBar extends BI.Widget {
    static xtype = 'app.layout_rookie_sidebar';

    public props = {
        baseCls: 'app-layout-rookie-sidebar',
    };

    public render() {
        return (
            <BI.VerticalLayout>
                <BI.VerticalLayout cls="login" horizontalAlign={'left'}>
                    <BI.Label text="CNode：Node.js专业中文社区" cls="one"></BI.Label>
                    <BI.HorizontalAdaptLayout cls="two">
                        <BI.Label text="您可以 "></BI.Label>
                        <BI.A text={'登录'} href="https://cnodejs.org/signin" cls={'a'}></BI.A>
                        <BI.Label text=" 或 "></BI.Label>
                        <BI.A text={'注册'} href="https://cnodejs.org/signup" cls={'a'}></BI.A>
                        <BI.Label text=" ，也可以"></BI.Label>
                    </BI.HorizontalAdaptLayout>
                    <BI.Button
                        text="通过 GitHub 登录"
                        cls="btn"
                        height={34}
                        width={151.01}
                        handler={function () {
                            location.href =
                                'https://github.com/login/oauth/authorize?response_type=code&redirect_uri=https%3A%2F%2Fcnodejs.org%2Fauth%2Fgithub%2Fcallback&client_id=0625d398dd9166a196e9';
                        }}
                    ></BI.Button>
                </BI.VerticalLayout>
                <BI.VerticalLayout horizontalAlign={'left'} cls="com">
                    <BI.Label text="友情社区" cls={'head'} textAlign="left"></BI.Label>
                    <BI.VerticalLayout cls="inner">
                        <BI.A
                            href="https://ruby-china.org/"
                            cls={'firs'}
                            el={
                                <BI.DefaultLayout>
                                    <BI.Img src="https://static2.cnodejs.org/public/images/ruby-china-20150529.png" width={150} height={49.51}></BI.Img>
                                </BI.DefaultLayout>
                            }
                        ></BI.A>
                        <BI.A
                            cls="mid"
                            href="https://golangtc.com/"
                            el={
                                <BI.DefaultLayout>
                                    <BI.Img src="https://static2.cnodejs.org/public/images/golangtc-logo.png" width={150} height={33.979}></BI.Img>
                                </BI.DefaultLayout>
                            }
                        ></BI.A>
                        <BI.A
                            href="https://learnku.com/laravel"
                            cls={'last'}
                            el={
                                <BI.DefaultLayout>
                                    <BI.Img src="https://static2.cnodejs.org/public/images/phphub-logo.png" width={150} height={48.896}></BI.Img>
                                </BI.DefaultLayout>
                            }
                        ></BI.A>
                    </BI.VerticalLayout>
                </BI.VerticalLayout>
                <BI.VerticalLayout cls="QR">
                    <BI.Label text="客户端二维码" cls={'head'} textAlign="left"></BI.Label>
                    <BI.VerticalLayout horizontalAlign="center" verticalAlign="middle" height={226} cls={'cent'}>
                        <BI.Img src="https://static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU" width={200} height={200}></BI.Img>
                        <BI.A href="https://github.com/soliury/noder-react-native" text={'客户端源码地址'}  textAlign='center' cls={'aaa'}></BI.A>
                    </BI.VerticalLayout>
                </BI.VerticalLayout>
            </BI.VerticalLayout>
        );
    }
}
