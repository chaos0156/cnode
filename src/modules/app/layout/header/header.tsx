import { shortcut,model } from '@core/decorator';
import { LayoutSider } from '../sider/sider';
import './header.less';

/**
 * 应用布局的顶栏
 */
@shortcut()
@model()
export class LayoutHeader extends BI.Widget {
    static xtype = 'app.layout_header';

    public props = {
        baseCls: 'app-layout-header',
    };

    public render() {
        return (
            <BI.DefaultLayout>
                <BI.LeftRightVerticalAdaptLayout
                    cls={'navbar-inner'}
                    height={40}
                    width={1400}
                    items={{
                        left: [
                            <BI.VerticalAdaptLayout>
                                <BI.DefaultLayout cls="brand" height={34}>
                                    <BI.A
                                        href="https://cnodejs.org/"
                                        el={
                                            <BI.DefaultLayout>
                                                <BI.Img src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" width={120} height={28.188}></BI.Img>
                                            </BI.DefaultLayout>
                                        }
                                    ></BI.A>
                                </BI.DefaultLayout>
                                <BI.SearchEditor width={233} height={28} cls="se"></BI.SearchEditor>
                            </BI.VerticalAdaptLayout>,
                        ],
                        right: [
                            <BI.HorizontalLayout>
                                <LayoutSider></LayoutSider>
                            </BI.HorizontalLayout>
                        ],
                    }}
                />
            </BI.DefaultLayout>
        );
    }
}
