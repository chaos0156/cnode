import { shortcut } from '@core/decorator';
import { LayoutMain } from './main/main';
import { LayoutSideBar } from './sidebar/sidebar';
import './dashboard.less'

@shortcut()
export class Dashboard extends BI.Widget {
    static xtype = 'app.Dashboard';

    public props: DashboardProps = {
        baseCls: 'app-dashboard',
        cardName: '',
    };

    public render() {
        return (
            <BI.HTapeLayout cls=".app-layout-dashboard-body" columnSize={[1095,290]}>
                <LayoutMain></LayoutMain>
                <LayoutSideBar></LayoutSideBar>
            </BI.HTapeLayout>
        );
    }
}

interface DashboardProps {
    baseCls: string;
    cardName: string;
}
