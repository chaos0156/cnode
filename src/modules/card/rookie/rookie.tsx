import { shortcut } from '@core/decorator';
import { LayoutMain } from './main/main';
import { LayoutSideBar } from './sidebar/sidebar';
import './rookie.less'

@shortcut()
export class Rookie extends BI.Widget {
    static xtype = 'app.Rookie';

    public props: RookieProps = {
        baseCls: 'app-rookie',
        cardName: '',
    };

    public render() {
        return (
            <BI.HTapeLayout cls="app-layout-rookie-body" columnSize={[1095,290]}>
                <LayoutMain></LayoutMain>
                <LayoutSideBar></LayoutSideBar>
            </BI.HTapeLayout>
        );
    }
}

interface RookieProps {
    baseCls: string;
    cardName: string;
}
