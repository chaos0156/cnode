import { model, Model } from '@core/decorator';
import { ROUTE_INFOS } from '@/routes';

@model()
export default class LayoutModel extends Model {
    static xtype = 'app.model.layout';

    public childContext = <const>['openedCards', 'activeCard'];

    public state(): LayoutModelState {
        return {
            openedCards: [ROUTE_INFOS[0].value],
            activeCard: ROUTE_INFOS[0].value,
        };
    }
}

interface LayoutModelState {
    openedCards: string[]; // 打开卡片的key的集合
    activeCard: string; // 当前卡片的key
}
