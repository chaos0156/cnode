import { shortcut } from '@core/decorator';
import { LayoutMain } from './main/main';
import './api.less'

@shortcut()
export class Api extends BI.Widget {
    static xtype = 'app.Api';

    public props: ApiProps = {
        baseCls: 'app-api',
        cardName: '',
    };

    public render() {
        return (
            <BI.HTapeLayout cls="app-layout-api-body" columnSize={[1095,290]}>
                <LayoutMain></LayoutMain>
                <BI.Layout></BI.Layout>
            </BI.HTapeLayout>
        );
    }
}

interface ApiProps {
    baseCls: string;
    cardName: string;
}
