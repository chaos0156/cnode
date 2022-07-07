import { shortcut } from '@core/decorator';
import './cell.less';

@shortcut()
export class Cell extends BI.Widget {
    static xtype = 'app.layout_dashboard_main_cell';

    private lastModified(lastTimeStr: string): string {
        let d = new Date(lastTimeStr);
        let times = Date.now() - d.getTime();
        let years = ~~(times / (24 * 1000 * 3600 * 30 * 12)); //计算相差的年
        let mons = ~~(times / (24 * 1000 * 3600 * 30)); //计算相差的月
        let days = ~~(times / (24 * 1000 * 3600)); //计算相差的天数
        let leave = times % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
        let h = ~~(leave / (3600 * 1000)); //计算小时数
        //计算分钟数
        let h_leave = leave % (3600 * 1000);
        let min = ~~(h_leave / (60 * 1000));
        //计算秒数
        let min_leave = h_leave % (60 * 1000);
        let sec = ~~(min_leave / 1000);
        if (years > 0) {
            return `${years}年前`;
        } else {
            if (mons > 0) {
                return `${mons}个月前`;
            } else {
                if (days > 0) {
                    if (h > 0) {
                        return `${days + 1}天前`;
                    }
                    return `${days}天前`;
                } else {
                    if (h > 0) {
                        return `${h}小时前`;
                    } else {
                        return `1小时前`;
                    }
                }
            }
        }
    }

    public props: CellProps = {
        baseCls: 'app-layout-dashboard-main-cell',
        content: {
            id: '61f69e4aa08b39f75309c2a8',
            author_id: '4efc278525fa69ac6900000f',
            tab: 'share',
            content:
                '<div class="markdown-text"><p><a href="https://registry.npmmirror.com">https://registry.npmmirror.com</a> 中国 npm 镜像源在2013年12月开始就使用基于 koa 的 <a href="https://github.com/cnpm/cnpmjs.org">https://github.com/cnpm/cnpmjs.org</a> 私有 npm 应用搭建，这些年 node 应用框架在快速换代升级，连我们自己造的 egg 都要升级到 TypeScript 了，所以在 2021 年我们启动了 <a href="http://cnpmjs.org">cnpmjs.org</a> 的技术升级重构，基于 egg 的 TypeScript 模式重新实现 <a href="https://github.com/cnpm/cnpmcore">https://github.com/cnpm/cnpmcore</a> 。</p>\n<p>npm registry 的接口是 100% 实现迁移，然后在数据同步上通过数据库实现足够简单的任务系统，已经在 2022年1月30日完全老数据迁移。\n非常感谢阿里云这么多年来的对中国 npm 镜像云服务器的开源赞助，只能靠仅有的广告位和每年的感谢帖子来回报这份天价的云资源账单。这一次重构之后，我们验证下来至少可以节省一半的云服务器资源，也算是让阿里云的开源赞助可以减轻一些成本负担。</p>\n<p>当然 cnpmcore 不仅仅是为了技术升级，我们的核心新能力会跟随 npmfs 黑科技在 2022 年发布出来，到时候 npm install 的安装速度会在 cli 侧和 registry 侧同时发力，让 npm 模块安装速度在可预见的未来达到秒级。</p>\n<p>PS：预估你在此期间遇到包数据同步和丢失问题，请先手动同步一次，如果还是没有，请回帖反馈给我们。</p>\n</div>',
            title: '中国 npm 镜像源升级公告',
            last_reply_at: '2022-06-27T07:49:38.180Z',
            good: false,
            top: true,
            reply_count: 7,
            visit_count: 71508,
            create_at: '2022-01-30T14:18:50.170Z',
            author: {
                loginname: 'fengmk2',
                avatar_url: 'https://avatars.githubusercontent.com/u/156269?v=4&s=120',
            },
        },
    };

    public render() {
        const { content } = this.options;
        const userUrl = `https://cnodejs.org/user/${content.author.loginname}`;
        const topicUrl = `https://cnodejs.org/topic/${content.id}`;
        const time = this.lastModified(content.last_reply_at);

        let element;
        if (content.top == true) {
            element = <BI.Label cls={'top'} text="置顶" width={24}></BI.Label>;
        } else {
            if (content.tab == 'share') {
                element = <BI.Label cls={'tab'} text="分享" width={24}></BI.Label>;
            } else {
                element = <BI.Label cls={'tab'} text="问答" width={24}></BI.Label>;
            }
        }

        return (
            <BI.LeftRightVerticalAdaptLayout
                cls={'avator'}
                height={30.51}
                width={1075}
                items={{
                    left: [
                        <BI.VerticalAdaptLayout>
                            <BI.A
                                href={userUrl}
                                el={
                                    <BI.DefaultLayout>
                                        <BI.Img src={content.author.avatar_url} width={30} height={30}></BI.Img>
                                    </BI.DefaultLayout>
                                }
                            />
                            <BI.CenterAdaptLayout cls="count">
                                <BI.Label text={`${content.reply_count}`} cls={'reply'}></BI.Label>
                                <BI.Label text=" / "></BI.Label>
                                <BI.Label text={String(content.visit_count)} cls={'visit'}></BI.Label>
                            </BI.CenterAdaptLayout>
                            <BI.VerticalAdaptLayout>{element}</BI.VerticalAdaptLayout>
                            <BI.A text={content.title} href={topicUrl} cls="topica"></BI.A>
                        </BI.VerticalAdaptLayout>,
                    ],
                    right: [
                        <BI.HorizontalLayout>
                            <BI.Label text={time}></BI.Label>
                        </BI.HorizontalLayout>,
                    ],
                }}
            />
        );
    }
}
interface CellProps {
    baseCls: string;
    content: {
        id: string;
        author_id: string;
        tab: string;
        content: string;
        title: string;
        last_reply_at: string;
        good: boolean;
        top: boolean;
        reply_count: number;
        visit_count: number;
        create_at: string;
        author: {
            loginname: string;
            avatar_url: string;
        };
    };
}
