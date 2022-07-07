import { shortcut } from '@core/decorator';
import './sidebar.less';

@shortcut()
export class LayoutSideBar extends BI.Widget {
    static xtype = 'app.layout_dashboard_sidebar';

    public props = {
        baseCls: 'app-layout-dashboard-sidebar',
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
                <BI.VerticalLayout horizontalAlign={'left'} cls="links">
                    <BI.Label text="无人回复的话题" cls="head" textAlign="left"></BI.Label>
                    <BI.A text={'Nodejs能读取到现有的Nacos配置中心的...'} href="https://cnodejs.org/topic/62c258c522c334f01ef6f9dc" cls="first"></BI.A>
                    <BI.A text={'webpack 不止静态分析'} href="https://cnodejs.org/topic/62bdcaa622c33485eff6f805" cls="er"></BI.A>
                    <BI.A text={'讲讲存档文件的包装设计'} href="https://cnodejs.org/topic/62bdbdee22c334ed71f6f7fe" cls="er"></BI.A>
                    <BI.A text={'CabloyJS 4.22重磅推出弹出式页面交互风格'} href="https://cnodejs.org/topic/62bd9e5a22c334bf71f6f7e7" cls="er"></BI.A>
                    <BI.A text={'推荐个插件：PPZ，在 vscode 里操作数据...'} href="https://cnodejs.org/topic/62bc0ec622c334ef51f6f6c7" cls="last"></BI.A>
                </BI.VerticalLayout>
                <BI.VerticalLayout horizontalAlign={'left'} cls="rank">
                    <BI.HorizontalAdaptLayout horizontalAlign={'left'} cls="top">
                        <BI.Label text="积分榜  " cls="la"></BI.Label>
                        <BI.A text={'TOP 100 >>'} href="https://cnodejs.org/users/top100" cls={'aa'}></BI.A>
                    </BI.HorizontalAdaptLayout>
                    <BI.HorizontalAdaptLayout cls="fi" horizontalAlign={'left'}>
                        <BI.Label text="23240" cls="point"></BI.Label>
                        <BI.A text={'i5ting'} href="https://cnodejs.org/user/i5ting" cls={'name'}></BI.A>
                    </BI.HorizontalAdaptLayout>
                    <BI.HorizontalAdaptLayout cls="err" horizontalAlign={'left'}>
                        <BI.Label text="15840" cls="point"></BI.Label>
                        <BI.A text={'alsotang'} href="https://cnodejs.org/user/alsotang" cls={'name'}></BI.A>
                    </BI.HorizontalAdaptLayout>
                    <BI.HorizontalAdaptLayout cls="err" horizontalAlign={'left'}>
                        <BI.Label text="10175" cls="point"></BI.Label>
                        <BI.A text={'atian25'} href="https://cnodejs.org/user/atian25" cls={'name'}></BI.A>
                    </BI.HorizontalAdaptLayout>
                    <BI.HorizontalAdaptLayout cls="err" horizontalAlign={'left'}>
                        <BI.Label text="9350" cls="point"></BI.Label>
                        <BI.A text={'leapon'} href="https://cnodejs.org/user/leapon" cls={'name'}></BI.A>
                    </BI.HorizontalAdaptLayout>
                    <BI.HorizontalAdaptLayout cls="err" horizontalAlign={'left'}>
                        <BI.Label text="8780" cls="point"></BI.Label>
                        <BI.A text={'jiyinyiyong'} href="https://cnodejs.org/user/jiyinyiyong" cls={'name'}></BI.A>
                    </BI.HorizontalAdaptLayout>
                    <BI.HorizontalAdaptLayout cls="err" horizontalAlign={'left'}>
                        <BI.Label text="8155" cls="point"></BI.Label>
                        <BI.A text={'yakczh'} href="https://cnodejs.org/user/yakczh" cls={'name'}></BI.A>
                    </BI.HorizontalAdaptLayout>
                    <BI.HorizontalAdaptLayout cls="err" horizontalAlign={'left'}>
                        <BI.Label text="6855" cls="point"></BI.Label>
                        <BI.A text={'im-here'} href="https://cnodejs.org/user/im-here" cls={'name'}></BI.A>
                    </BI.HorizontalAdaptLayout>
                    <BI.HorizontalAdaptLayout cls="err" horizontalAlign={'left'}>
                        <BI.Label text="6150" cls="point"></BI.Label>
                        <BI.A text={'DevinXian'} href="https://cnodejs.org/user/DevinXian" cls={'name'}></BI.A>
                    </BI.HorizontalAdaptLayout>
                    <BI.HorizontalAdaptLayout cls="err" horizontalAlign={'left'}>
                        <BI.Label text="5815" cls="point"></BI.Label>
                        <BI.A text={'chapgaga'} href="https://cnodejs.org/user/chapgaga" cls={'name'}></BI.A>
                    </BI.HorizontalAdaptLayout>
                    <BI.HorizontalAdaptLayout cls="la" horizontalAlign={'left'}>
                        <BI.Label text="5380" cls="point"></BI.Label>
                        <BI.A text={'magicdawn'} href="https://cnodejs.org/user/magicdawn" cls={'name'}></BI.A>
                    </BI.HorizontalAdaptLayout>
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
