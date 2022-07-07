import { shortcut, store } from '@core/decorator';
import { LayoutHeader } from './header/header';
import { LayoutContent } from './content/content';
import { LayoutFooter } from './footer/footer';
import LayoutConstant from './layout.constant';
import LayoutModel from './layout.model';
import './layout.less';

/**
 * 应用布局
 */
@shortcut()
@store(LayoutModel)
export default class Layout extends BI.Widget {
    static xtype = 'app.layout';

    public props = {
        baseCls: 'app-layout',
    };

    public render() {
        const {HEADER_HEIGHT,FOOTER_HEIGHT} = LayoutConstant
        return (
            <BI.VerticalLayout rowSize={[HEADER_HEIGHT,'fill',FOOTER_HEIGHT]}>
                <LayoutHeader />
                <LayoutContent />
                <LayoutFooter />
            </BI.VerticalLayout>
        );
    }
}
