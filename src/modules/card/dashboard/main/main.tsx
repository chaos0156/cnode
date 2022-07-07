import { shortcut } from '@core/decorator';
import { Cell } from '../topic/cell/cell';
import { Topic } from '../topic/topic';
import './main.less';

@shortcut()
export class LayoutMain extends BI.Widget {
    static xtype = 'app.layout_dashboard_main';

    public props = {
        baseCls: 'app-layout-dashboard-main',
    };

    public render() {
        return (
            <BI.VerticalLayout>
                <BI.VerticalAdaptLayout textAlign="left" cls={'header'}>
                    <BI.A href="https://cnodejs.org/?tab=all" text={'全部'} cls={'current-tab'}></BI.A>
                    <BI.A href="https://cnodejs.org/?tab=good" text={'精华'} cls={'topic-tab'}></BI.A>
                    <BI.A href="https://cnodejs.org/?tab=share" text={'分享'} cls={'topic-tab'}></BI.A>
                    <BI.A href="https://cnodejs.org/?tab=ask" text={'问答'} cls={'topic-tab'}></BI.A>
                    <BI.A href="https://cnodejs.org/?tab=job" text={'招聘'} cls={'topic-tab'}></BI.A>
                    <BI.A href="https://cnodejs.org/?tab=dev" text={'客户端测试'} cls={'topic-tab'}></BI.A>
                </BI.VerticalAdaptLayout>
                <Topic></Topic>
            </BI.VerticalLayout>
        );
    }
}
