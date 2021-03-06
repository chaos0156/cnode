import { model, Model } from '@core/decorator';
import LayoutModel from '../layout.model';

@model()
export default class LayoutSiderModel extends Model<{
    types: {
        openedCards: LayoutModel['TYPE']['openedCards'];
        activeCard: LayoutModel['TYPE']['activeCard'];
    };
    context: LayoutSiderModel['context'];
}> {
    static xtype = 'app.model.layout_sider';

    public context = <const>['openedCards', 'activeCard'];

    public actions = {
        /**
         * 用于RouteType为Single时打开单个card
         * @param value 要打开的card
         */
        openSingleCard: (value: string) => {
            if (BI.indexOf(this.model.openedCards, value) === -1) {
                this.model.openedCards.push(value);
            }
            this.model.activeCard = value;
        },
        /**
         * 用于RouteType为Multiple时打开多个card
         * @param values 要打开的card们
         */
        openMultipleCards: (values: string[]) => {
            this.model.openedCards = values;
            this.model.activeCard = values[0];
        },
        /**
         * 用于切换一级菜单时关闭所有cards
         */
        closeAllCards: () => {
            this.model.openedCards = [];
            this.model.activeCard = '';
        },
    };
}
