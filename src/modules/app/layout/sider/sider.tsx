import { shortcut, store } from '@core/decorator';
import { Menu, MenuItemStyle } from '@base/menu/menu';
import { ROUTE_INFOS } from '@/routes';
import LayoutSiderModel from './sider.model';
import './sider.less';

/**
 * 应用布局的侧栏，包括一级菜单和二级菜单
 */
@shortcut()
@store(LayoutSiderModel)
export class LayoutSider extends BI.Widget {
    static xtype = 'app.layout_sider';

    public props = {
        baseCls: 'app-layout-sider',
    };

    private store: LayoutSiderModel['store'];

    public render() {
        const mainMenuItemInfos = BI.map(ROUTE_INFOS, (_index, routeInfo) => {
            const { value, text, icon } = routeInfo;
            return {
                value,
                text,
                icon
            };
        });

        return (
            <BI.HorizontalLayout>
                <Menu
                    cls="app-layout-sider-main-menu"
                    itemInfos={mainMenuItemInfos}
                    itemStyle={MenuItemStyle.Main}
                    value={ROUTE_INFOS[0].value}
                    listeners={[
                        {
                            eventName: Menu.EVENT.CHANGE,
                            action: (value: string) => {
                                this.store.closeAllCards();
                                this.store.openSingleCard(value);
                            },
                        },
                    ]}
                />
            </BI.HorizontalLayout>
        );
    }
}
