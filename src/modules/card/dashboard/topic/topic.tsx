import { shortcut } from '@core/decorator';
import axios from 'axios';
import { Cell } from './cell/cell';
import './topic.less';

@shortcut()
export class Topic extends BI.Widget {
    static xtype = 'app.layout_dashboard_main_topic';

    public props = {
        baseCls: 'app-layout-dashboard-main-topic',
        currentPage: 1,
        data: [],
    };

    private createTopics() {
        const content = this.options.data;
        const lists = BI.map(content, (_, item) => {
            return <Cell content={item} />;
        });
        return lists;
    }

    beforeInit() {
        let self = this;
        return axios.get('https://cnodejs.org/api/v1/topics').then(res => {
            console.log(self);
            self.options.data = res.data.data;
        });
    }
    public render() {
        const lists = this.createTopics();
        return (
            <BI.VerticalLayout>
                <BI.VerticalLayout items={lists}></BI.VerticalLayout>
                <BI.Pager
                    tgap={10}
                    curr={this.options.currentPage}
                    pages={10}
                    height={30}
                    dynamicShow={false}
                    groups={5}
                    cls={'pager'}
                    prev={'<<'}
                    next={'>>'}
                />
            </BI.VerticalLayout>
        );
    }
}
