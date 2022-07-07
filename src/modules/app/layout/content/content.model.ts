import { model, Model } from '@core/decorator';
import LayoutModel from '../layout.model';

@model()
export default class LayoutContentModel extends Model<{
    types: {
        openedCards: LayoutModel['TYPE']['openedCards'];
        activeCard: LayoutModel['TYPE']['activeCard'];
    };
    context: LayoutContentModel['context'];
}> {
    static xtype = 'app.model.layout_content';

    public context = <const>['openedCards', 'activeCard'];

    public actions = {
        /**
         * 切换card
         * @param value 要切换的card的key
         */
        changeCard: (value: string) => {
            this.model.activeCard = value;
        },
        /**
         * 关闭card
         * @param value 要关闭的card的key
         */
        closeCard: (value: string) => {
            // 获取要关闭card在已打开cards中的下标
            const index = BI.indexOf(this.model.openedCards, value);
            // 如果要关闭card就是当前card，则自动切换至其它card
            if (value === this.model.activeCard) {
                const [prevIndex, nextIndex] = [index - 1, index + 1];
                const [prevCard, nextCard] = [this.model.openedCards[prevIndex], this.model.openedCards[nextIndex]];
                this.model.activeCard = nextCard || prevCard;
            }
            // 然后从已打开cards中移除目标card
            BI.removeAt(this.model.openedCards, index);
        },
    };
}
