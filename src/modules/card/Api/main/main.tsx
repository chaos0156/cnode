import { shortcut } from '@core/decorator';
import './main.less';

@shortcut()
export class LayoutMain extends BI.Widget {
    static xtype = 'app.layout_api_main';

    public props = {
        baseCls: 'app-layout-api-main',
    };

    public render() {
        return (
            <BI.VerticalLayout>
                <BI.VerticalAdaptLayout textAlign="left" cls={'header'}>
                    <BI.A text={'主页'} cls={'app-layout-api-a'}></BI.A>
                    <BI.Label text="/" cls="app-layout-api-mid"></BI.Label>
                    <BI.Label text=" API" cls="app-layout-api-la"></BI.Label>
                </BI.VerticalAdaptLayout>
                <BI.VerticalLayout cls={'app-layout-api-topic'}>
                    <BI.VerticalAdaptLayout textAlign="left" cls="apihead">
                        <BI.Label text="以下 api 路径均以 "></BI.Label>
                        <BI.A text={'https://cnodejs.org/api/v1'} cls="apia"></BI.A>
                        <BI.Label text=" 为前缀"></BI.Label>
                    </BI.VerticalAdaptLayout>
                    <BI.Label text="主题" cls={'h3'} textAlign="left"></BI.Label>
                    <BI.Label text="get /topics 主题首页" cls={'h4'} textAlign="left"></BI.Label>
                    <BI.Label text="接收 get 参数" cls={'p'} textAlign="left"></BI.Label>
                    <BI.VerticalLayout>
                        <BI.HorizontalLayout cls="list">
                            <BI.CenterLayout width={5.78} height={30}>
                                <BI.IconButton cls={'dot-h-font'}></BI.IconButton>
                            </BI.CenterLayout>
                            <BI.Label text="   page " cls={'article'}></BI.Label>
                            <BI.Label text="Number" cls={'code'}></BI.Label>
                            <BI.Label text=" 页数" cls={'article'}></BI.Label>
                        </BI.HorizontalLayout>
                        <BI.HorizontalLayout cls="list">
                            <BI.CenterLayout width={5.78} height={30}>
                                <BI.IconButton cls={'dot-h-font'}></BI.IconButton>
                            </BI.CenterLayout>
                            <BI.Label text="  tab " cls={'article'}></BI.Label>
                            <BI.Label text="String" cls={'code'}></BI.Label>
                            <BI.Label text=" 主题分类。目前有 " cls={'article'}></BI.Label>
                            <BI.Label text="ask" cls={'code'}></BI.Label>
                            <BI.Label text="share" cls={'code'}></BI.Label>
                            <BI.Label text="job" cls={'code'}></BI.Label>
                            <BI.Label text="good" cls={'code'}></BI.Label>
                        </BI.HorizontalLayout>
                        <BI.HorizontalLayout cls="list">
                            <BI.CenterLayout width={5.78} height={30}>
                                <BI.IconButton cls={'dot-h-font'}></BI.IconButton>
                            </BI.CenterLayout>
                            <BI.Label text="  limit " cls={'article'}></BI.Label>
                            <BI.Label text="Number" cls={'code'}></BI.Label>
                            <BI.Label text=" 每一页的主题数量 " cls={'article'}></BI.Label>
                        </BI.HorizontalLayout>
                        <BI.HorizontalLayout cls="list">
                            <BI.CenterLayout width={5.78} height={30}>
                                <BI.IconButton cls={'dot-h-font'}></BI.IconButton>
                            </BI.CenterLayout>
                            <BI.Label text="  mdrender " cls={'article'}></BI.Label>
                            <BI.Label text="String" cls={'code'}></BI.Label>
                            <BI.Label text=" 当为 " cls={'article'}></BI.Label>
                            <BI.Label text="false" cls={'code'}></BI.Label>
                            <BI.Label text=" 时，不渲染。默认为 " cls={'article'}></BI.Label>
                            <BI.Label text="true" cls={'code'}></BI.Label>
                            <BI.Label text=" , 渲染出现的所有 markdown 格式文本。" cls={'article'}></BI.Label>
                        </BI.HorizontalLayout>
                    </BI.VerticalLayout>
                    <BI.HorizontalLayout cls={'p'}>
                        <BI.Label text="示例: "></BI.Label>
                        <BI.A text={'/api/v1/topics'} href="https://cnodejs.org/api/v1/topics"></BI.A>
                    </BI.HorizontalLayout>
                    <BI.Label text="get /topics/:id 主题详情" cls={'h4'} textAlign="left"></BI.Label>
                    <BI.Label text="接收 get 参数" cls={'p'} textAlign="left"></BI.Label>
                    <BI.VerticalLayout>
                        <BI.HorizontalLayout cls="list">
                            <BI.CenterLayout width={5.78} height={30}>
                                <BI.IconButton cls={'dot-h-font'}></BI.IconButton>
                            </BI.CenterLayout>
                            <BI.Label text="  mdrender " cls={'article'}></BI.Label>
                            <BI.Label text="String" cls={'code'}></BI.Label>
                            <BI.Label text=" 当为 " cls={'article'}></BI.Label>
                            <BI.Label text="false" cls={'code'}></BI.Label>
                            <BI.Label text=" 时，不渲染。默认为 " cls={'article'}></BI.Label>
                            <BI.Label text="true" cls={'code'}></BI.Label>
                            <BI.Label text=" , 渲染出现的所有 markdown 格式文本。" cls={'article'}></BI.Label>
                        </BI.HorizontalLayout>
                        <BI.HorizontalLayout cls="list">
                            <BI.CenterLayout width={5.78} height={30}>
                                <BI.IconButton cls={'dot-h-font'}></BI.IconButton>
                            </BI.CenterLayout>
                            <BI.Label text="  accesstoken " cls={'article'}></BI.Label>
                            <BI.Label text="String" cls={'code'}></BI.Label>
                            <BI.Label
                                text=" 当需要知道当需要知道一个主题是否被特定用户收藏以及对应评论是否被特定用户点赞时，才需要带此参数。会影响返回值中的 "
                                cls={'article'}
                            ></BI.Label>
                            <BI.Label text="is_collect" cls={'code'}></BI.Label>
                        </BI.HorizontalLayout>
                        <BI.HorizontalLayout cls="list">
                            <BI.Label text=" 以及 " cls={'article'} textAlign="left"></BI.Label>
                            <BI.Label text="replies" cls={'code'}></BI.Label>
                            <BI.Label text=" 列表中的 " cls={'article'} textAlign="left"></BI.Label>
                            <BI.Label text="is_uped" cls={'code'}></BI.Label>
                            <BI.Label text=" 值。" cls={'article'} textAlign="left"></BI.Label>
                        </BI.HorizontalLayout>
                    </BI.VerticalLayout>
                    <BI.HorizontalLayout cls={'p'}>
                        <BI.Label text="示例: "></BI.Label>
                        <BI.A text={'/api/v1/topic/5433d5e4e737cbe96dcef312'} href="https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312"></BI.A>
                    </BI.HorizontalLayout>
                    <BI.Label text="post /topics 新建主题" cls={'h4'} textAlign="left"></BI.Label>
                    <BI.Label text="接收 post 参数" cls={'p'} textAlign="left"></BI.Label>
                    <BI.VerticalLayout>
                        <BI.HorizontalLayout cls="list">
                            <BI.CenterLayout width={5.78} height={30}>
                                <BI.IconButton cls={'dot-h-font'}></BI.IconButton>
                            </BI.CenterLayout>
                            <BI.Label text="  accesstoken " cls={'article'}></BI.Label>
                            <BI.Label text="String" cls={'code'}></BI.Label>
                            <BI.Label text=" 用户的 accessToken" cls={'article'}></BI.Label>
                        </BI.HorizontalLayout>
                        <BI.HorizontalLayout cls="list">
                            <BI.CenterLayout width={5.78} height={30}>
                                <BI.IconButton cls={'dot-h-font'}></BI.IconButton>
                            </BI.CenterLayout>
                            <BI.Label text="  title " cls={'article'}></BI.Label>
                            <BI.Label text="String" cls={'code'}></BI.Label>
                            <BI.Label text=" 标题" cls={'article'}></BI.Label>
                        </BI.HorizontalLayout>
                        <BI.HorizontalLayout cls="list">
                            <BI.CenterLayout width={5.78} height={30}>
                                <BI.IconButton cls={'dot-h-font'}></BI.IconButton>
                            </BI.CenterLayout>
                            <BI.Label text="  tab " cls={'article'}></BI.Label>
                            <BI.Label text="String" cls={'code'}></BI.Label>
                            <BI.Label text=" 目前有 " cls={'article'}></BI.Label>
                            <BI.Label text="ask" cls={'code'}></BI.Label>
                            <BI.Label text="share" cls={'code'}></BI.Label>
                            <BI.Label text="job" cls={'code'}></BI.Label>
                            <BI.Label text="dev" cls={'code'}></BI.Label>
                            <BI.Label text=" 。开发新客户端的同学，请务必将你们的测试帖发在 " cls={'article'}></BI.Label>
                            <BI.Label text="dev" cls={'code'}></BI.Label>
                            <BI.Label text=" 专区，以免污染日常的版面，否则会进行封号一周处理。 " cls={'article'}></BI.Label>
                        </BI.HorizontalLayout>
                        <BI.HorizontalLayout cls="list">
                            <BI.CenterLayout width={5.78} height={30}>
                                <BI.IconButton cls={'dot-h-font'}></BI.IconButton>
                            </BI.CenterLayout>
                            <BI.Label text="  content " cls={'article'}></BI.Label>
                            <BI.Label text="String" cls={'code'}></BI.Label>
                            <BI.Label text=" 主体内容" cls={'article'}></BI.Label>
                        </BI.HorizontalLayout>
                    </BI.VerticalLayout>
                    <BI.Label text="返回值示例" cls={'p'} textAlign="left"></BI.Label>
                    <BI.HorizontalLayout cls={'pre'}>
                        <BI.Label text="{success: true, topic_id:" cls={'code'}></BI.Label>
                        <BI.Label text="'5433d5e4e737cbe96dcef312'" cls="code highlight"></BI.Label>
                        <BI.Label text="}" cls={'code'}></BI.Label>
                    </BI.HorizontalLayout>
                    <BI.Label text="post /topics/update 编辑主题" cls={'h4'} textAlign="left"></BI.Label>
                    <BI.Label text="接收 post 参数" cls={'p'} textAlign="left"></BI.Label>
                    <BI.VerticalLayout>
                        <BI.HorizontalLayout cls="list">
                            <BI.CenterLayout width={5.78} height={30}>
                                <BI.IconButton cls={'dot-h-font'}></BI.IconButton>
                            </BI.CenterLayout>
                            <BI.Label text="  accesstoken " cls={'article'}></BI.Label>
                            <BI.Label text="String" cls={'code'}></BI.Label>
                            <BI.Label text=" 用户的 accessToken" cls={'article'}></BI.Label>
                        </BI.HorizontalLayout>
                        <BI.HorizontalLayout cls="list">
                            <BI.CenterLayout width={5.78} height={30}>
                                <BI.IconButton cls={'dot-h-font'}></BI.IconButton>
                            </BI.CenterLayout>
                            <BI.Label text="  topic_id " cls={'article'}></BI.Label>
                            <BI.Label text="String" cls={'code'}></BI.Label>
                            <BI.Label text=" 主题id" cls={'article'}></BI.Label>
                        </BI.HorizontalLayout>
                        <BI.HorizontalLayout cls="list">
                            <BI.CenterLayout width={5.78} height={30}>
                                <BI.IconButton cls={'dot-h-font'}></BI.IconButton>
                            </BI.CenterLayout>
                            <BI.Label text="  title " cls={'article'}></BI.Label>
                            <BI.Label text="String" cls={'code'}></BI.Label>
                            <BI.Label text=" 标题" cls={'article'}></BI.Label>
                        </BI.HorizontalLayout>
                        <BI.HorizontalLayout cls="list">
                            <BI.CenterLayout width={5.78} height={30}>
                                <BI.IconButton cls={'dot-h-font'}></BI.IconButton>
                            </BI.CenterLayout>
                            <BI.Label text="  tab " cls={'article'}></BI.Label>
                            <BI.Label text="String" cls={'code'}></BI.Label>
                            <BI.Label text=" 目前有 " cls={'article'}></BI.Label>
                            <BI.Label text="ask" cls={'code'}></BI.Label>
                            <BI.Label text="share" cls={'code'}></BI.Label>
                            <BI.Label text="job" cls={'code'}></BI.Label>
                        </BI.HorizontalLayout>
                        <BI.HorizontalLayout cls="list">
                            <BI.CenterLayout width={5.78} height={30}>
                                <BI.IconButton cls={'dot-h-font'}></BI.IconButton>
                            </BI.CenterLayout>
                            <BI.Label text="  content " cls={'article'}></BI.Label>
                            <BI.Label text="String" cls={'code'}></BI.Label>
                            <BI.Label text=" 主体内容" cls={'article'}></BI.Label>
                        </BI.HorizontalLayout>
                    </BI.VerticalLayout>
                    <BI.Label text="返回值示例" cls={'p'} textAlign="left"></BI.Label>
                    <BI.HorizontalLayout cls={'pre'}>
                        <BI.Label text="{success: true, topic_id:" cls={'code'}></BI.Label>
                        <BI.Label text='"5433d5e4e737cbe96dcef312"' cls="code highlight"></BI.Label>
                        <BI.Label text="}" cls={'code'}></BI.Label>
                    </BI.HorizontalLayout>
                    <BI.Label text="主题收藏" cls={'h3'} textAlign="left"></BI.Label>
                    <BI.Label text="post /topic_collect/collect 收藏主题" cls={'h4'} textAlign="left"></BI.Label>
                    <BI.Label text="接收 post 参数" cls={'p'} textAlign="left"></BI.Label>
                    <BI.VerticalLayout>
                        <BI.HorizontalLayout cls="list">
                            <BI.CenterLayout width={5.78} height={30}>
                                <BI.IconButton cls={'dot-h-font'}></BI.IconButton>
                            </BI.CenterLayout>
                            <BI.Label text="  accesstoken " cls={'article'}></BI.Label>
                            <BI.Label text="String" cls={'code'}></BI.Label>
                            <BI.Label text=" 用户的 accessToken" cls={'article'}></BI.Label>
                        </BI.HorizontalLayout>
                        <BI.HorizontalLayout cls="list">
                            <BI.CenterLayout width={5.78} height={30}>
                                <BI.IconButton cls={'dot-h-font'}></BI.IconButton>
                            </BI.CenterLayout>
                            <BI.Label text="  topic_id " cls={'article'}></BI.Label>
                            <BI.Label text="String" cls={'code'}></BI.Label>
                            <BI.Label text=" 主题id" cls={'article'}></BI.Label>
                        </BI.HorizontalLayout>
                    </BI.VerticalLayout>
                    <BI.Label text="返回值示例" cls={'p'} textAlign="left"></BI.Label>
                    <BI.HorizontalLayout cls={'pre'}>
                        <BI.Label text="{" cls={'code'}></BI.Label>
                        <BI.Label text='"success"' cls={'code highlight'}></BI.Label>
                        <BI.Label text=": true}" cls={'code'}></BI.Label>
                    </BI.HorizontalLayout>
                    <BI.Label text="post /topic_collect/de_collect 取消主题" cls={'h4'} textAlign="left"></BI.Label>
                    <BI.Label text="接收 post 参数" cls={'p'} textAlign="left"></BI.Label>
                    <BI.VerticalLayout>
                        <BI.HorizontalLayout cls="list">
                            <BI.CenterLayout width={5.78} height={30}>
                                <BI.IconButton cls={'dot-h-font'}></BI.IconButton>
                            </BI.CenterLayout>
                            <BI.Label text="  accesstoken " cls={'article'}></BI.Label>
                            <BI.Label text="String" cls={'code'}></BI.Label>
                            <BI.Label text=" 用户的 accessToken" cls={'article'}></BI.Label>
                        </BI.HorizontalLayout>
                        <BI.HorizontalLayout cls="list">
                            <BI.CenterLayout width={5.78} height={30}>
                                <BI.IconButton cls={'dot-h-font'}></BI.IconButton>
                            </BI.CenterLayout>
                            <BI.Label text="  topic_id " cls={'article'}></BI.Label>
                            <BI.Label text="String" cls={'code'}></BI.Label>
                            <BI.Label text=" 主题id" cls={'article'}></BI.Label>
                        </BI.HorizontalLayout>
                    </BI.VerticalLayout>
                    <BI.Label text="返回值示例" cls={'p'} textAlign="left"></BI.Label>
                    <BI.HorizontalLayout cls={'pre'}>
                        <BI.Label text="{success: true}" cls={'code'}></BI.Label>
                    </BI.HorizontalLayout>
                    <BI.Label text="get /topic_collect/:loginname 用户所收藏的主题" cls={'h4'} textAlign="left"></BI.Label>
                    <BI.HorizontalLayout cls={'p'}>
                        <BI.Label text="示例: "></BI.Label>
                        <BI.A text={'/api/v1/topic_collect/alsotang'} href="https://cnodejs.org/api/v1/topic_collect/alsotang"></BI.A>
                    </BI.HorizontalLayout>
                    <BI.Label text="评论" cls={'h3'} textAlign="left"></BI.Label>
                    <BI.Label text="post /topic/:topic_id/replies 新建评论" cls={'h4'} textAlign="left"></BI.Label>
                    <BI.Label text="接收 post 参数" cls={'p'} textAlign="left"></BI.Label>
                    <BI.VerticalLayout>
                        <BI.HorizontalLayout cls="list">
                            <BI.CenterLayout width={5.78} height={30}>
                                <BI.IconButton cls={'dot-h-font'}></BI.IconButton>
                            </BI.CenterLayout>
                            <BI.Label text="  accesstoken " cls={'article'}></BI.Label>
                            <BI.Label text="String" cls={'code'}></BI.Label>
                            <BI.Label text=" 用户的 accessToken" cls={'article'}></BI.Label>
                        </BI.HorizontalLayout>
                        <BI.HorizontalLayout cls="list">
                            <BI.CenterLayout width={5.78} height={30}>
                                <BI.IconButton cls={'dot-h-font'}></BI.IconButton>
                            </BI.CenterLayout>
                            <BI.Label text="  content " cls={'article'}></BI.Label>
                            <BI.Label text="String" cls={'code'}></BI.Label>
                            <BI.Label text=" 评论的主体" cls={'article'}></BI.Label>
                        </BI.HorizontalLayout>
                        <BI.HorizontalLayout cls="list">
                            <BI.CenterLayout width={5.78} height={30}>
                                <BI.IconButton cls={'dot-h-font'}></BI.IconButton>
                            </BI.CenterLayout>
                            <BI.Label text="  reply_id " cls={'article'}></BI.Label>
                            <BI.Label text="String" cls={'code'}></BI.Label>
                            <BI.Label text=" 如果这个评论是对另一个评论的回复，请务必带上此字段。这样前端就可以构建出评论线索图。" cls={'article'}></BI.Label>
                        </BI.HorizontalLayout>
                    </BI.VerticalLayout>
                    <BI.Label text="返回值示例" cls={'p'} textAlign="left"></BI.Label>
                    <BI.HorizontalLayout cls={'pre'}>
                        <BI.Label text="{success: true, reply_id:" cls={'code'}></BI.Label>
                        <BI.Label text='"5433d5e4e737cbe96dcef312"' cls="code highlight"></BI.Label>
                        <BI.Label text="}" cls={'code'}></BI.Label>
                    </BI.HorizontalLayout>
                    <BI.Label text="post /reply/:reply_id/ups 为评论点赞" cls={'h4'} textAlign="left"></BI.Label>
                    <BI.Label text="接收 post 参数" cls={'p'} textAlign="left"></BI.Label>
                    <BI.VerticalLayout>
                        <BI.HorizontalLayout cls="list">
                            <BI.CenterLayout width={5.78} height={30}>
                                <BI.IconButton cls={'dot-h-font'}></BI.IconButton>
                            </BI.CenterLayout>
                            <BI.Label text="  accesstoken " cls={'article'}></BI.Label>
                            <BI.Label text="String" cls={'code'}></BI.Label>
                        </BI.HorizontalLayout>
                    </BI.VerticalLayout>
                    <BI.HorizontalLayout>
                        <BI.Label
                            text="接口会自动判断用户是否已点赞，如果否，则点赞；如果是，则取消点赞。点赞的动作反应在返回数据的 "
                            cls={'article'}
                        ></BI.Label>
                        <BI.Label text="action" cls={'code'}></BI.Label>
                        <BI.Label text=" 字段中 ， " cls={'article'}></BI.Label>
                        <BI.Label text="up" cls={'code'}></BI.Label>
                        <BI.Label text=" or  " cls={'article'}></BI.Label>
                        <BI.Label text="down" cls={'code'}></BI.Label>
                        <BI.Label text=" 。" cls={'article'}></BI.Label>
                    </BI.HorizontalLayout>
                    <BI.Label text="返回值示例" cls={'p'} textAlign="left"></BI.Label>
                    <BI.HorizontalLayout cls={'pre'}>
                        <BI.Label text="{" cls={'code'}></BI.Label>
                        <BI.Label text='"success"' cls={'code highlight'}></BI.Label>
                        <BI.Label text=": true," cls={'code'}></BI.Label>
                        <BI.Label text="{" cls={'code'}></BI.Label>
                        <BI.Label text='"action"' cls={'code highlight'}></BI.Label>
                        <BI.Label text=":" cls={'code'}></BI.Label>
                        <BI.Label text='"down"' cls={'code highlight'}></BI.Label>
                        <BI.Label text="}" cls={'code'}></BI.Label>
                    </BI.HorizontalLayout>
                    <BI.Label text="用户" cls={'h3'} textAlign="left"></BI.Label>
                    <BI.Label text="get /user/:loginname 用户详情" cls={'h4'} textAlign="left"></BI.Label>
                    <BI.HorizontalLayout cls={'p'}>
                        <BI.Label text="示例: "></BI.Label>
                        <BI.A text={'/api/v1/user/alsotang'} href="https://cnodejs.org/api/v1/user/alsotang"></BI.A>
                    </BI.HorizontalLayout>
                    <BI.Label text="post /accesstoken 验证 accessToken 的正确性" cls={'h4'} textAlign="left"></BI.Label>
                    <BI.Label text="接收 post 参数" cls={'p'} textAlign="left"></BI.Label>
                    <BI.VerticalLayout>
                        <BI.HorizontalLayout cls="list">
                            <BI.CenterLayout width={5.78} height={30}>
                                <BI.IconButton cls={'dot-h-font'}></BI.IconButton>
                            </BI.CenterLayout>
                            <BI.Label text="  accesstoken " cls={'article'}></BI.Label>
                            <BI.Label text="String" cls={'code'}></BI.Label>
                            <BI.Label text=" 用户的 accessToken" cls={'article'}></BI.Label>
                        </BI.HorizontalLayout>
                    </BI.VerticalLayout>
                    <BI.Label text="如果成功匹配上用户，返回成功信息。否则 403。" cls={'p'} textAlign="left"></BI.Label>
                    <BI.Label text="返回值示例" cls={'p'} textAlign="left"></BI.Label>
                    <BI.HorizontalLayout cls={'pre'}>
                        <BI.Label
                            text="{success: true, loginname: req.user.loginname, id: req.user.id, avatar_url: req.user.avatar_url}"
                            cls={'code'}
                        ></BI.Label>
                    </BI.HorizontalLayout>
                    <BI.Label text="消息通知" cls={'h3'} textAlign="left"></BI.Label>
                    <BI.Label text="get /message/count 获取未读消息数" cls={'h4'} textAlign="left"></BI.Label>
                    <BI.Label text="接收 get 参数" cls={'p'} textAlign="left"></BI.Label>
                    <BI.VerticalLayout>
                        <BI.HorizontalLayout cls="list">
                            <BI.CenterLayout width={5.78} height={30}>
                                <BI.IconButton cls={'dot-h-font'}></BI.IconButton>
                            </BI.CenterLayout>
                            <BI.Label text="  accesstoken " cls={'article'}></BI.Label>
                            <BI.Label text="String" cls={'code'}></BI.Label>
                        </BI.HorizontalLayout>
                    </BI.VerticalLayout>
                    <BI.Label text="返回值示例" cls={'p'} textAlign="left"></BI.Label>
                    <BI.HorizontalLayout cls={'pre'}>
                        <BI.Label text="{ data: 3 }" cls={'code'}></BI.Label>
                    </BI.HorizontalLayout>
                    <BI.Label text="get /messages 获取已读和未读消息" cls={'h4'} textAlign="left"></BI.Label>
                    <BI.Label text="接收 get 参数" cls={'p'} textAlign="left"></BI.Label>
                    <BI.VerticalLayout>
                        <BI.HorizontalLayout cls="list">
                            <BI.CenterLayout width={5.78} height={30}>
                                <BI.IconButton cls={'dot-h-font'}></BI.IconButton>
                            </BI.CenterLayout>
                            <BI.Label text="  accesstoken " cls={'article'}></BI.Label>
                            <BI.Label text="String" cls={'code'}></BI.Label>
                        </BI.HorizontalLayout>
                        <BI.HorizontalLayout cls="list">
                            <BI.CenterLayout width={5.78} height={30}>
                                <BI.IconButton cls={'dot-h-font'}></BI.IconButton>
                            </BI.CenterLayout>
                            <BI.Label text="  mdrender " cls={'article'}></BI.Label>
                            <BI.Label text="String" cls={'code'}></BI.Label>
                            <BI.Label text=" 当为 " cls={'article'}></BI.Label>
                            <BI.Label text="false" cls={'code'}></BI.Label>
                            <BI.Label text=" 时，不渲染。默认为 " cls={'article'}></BI.Label>
                            <BI.Label text="true" cls={'code'}></BI.Label>
                            <BI.Label text=" , 渲染出现的所有 markdown 格式文本。" cls={'article'}></BI.Label>
                        </BI.HorizontalLayout>
                    </BI.VerticalLayout>
                    <BI.Label text="返回值示例" cls={'p'} textAlign="left"></BI.Label>
                    <BI.VerticalLayout cls={'pre'}>
                        <BI.HorizontalLayout>
                            <BI.Label text="{" cls={'code'}></BI.Label>
                        </BI.HorizontalLayout>
                        <BI.Label text="  data: {" cls={'code'}></BI.Label>
                        <BI.HorizontalLayout>
                            <BI.Label text="    has_read_messages: []," cls={'code'}></BI.Label>
                        </BI.HorizontalLayout>
                        <BI.HorizontalLayout>
                            <BI.Label text="    hasnot_read_messages: [" cls={'code'}></BI.Label>
                        </BI.HorizontalLayout>
                        <BI.HorizontalLayout>
                            <BI.Label text="      {" cls={'code'}></BI.Label>
                        </BI.HorizontalLayout>
                        <BI.HorizontalLayout>
                            <BI.Label text="        id:" cls={'code'}></BI.Label>
                            <BI.Label text='"543fb7abae523bbc80412b26"' cls="code highlight"></BI.Label>
                            <BI.Label text="," cls={'code'}></BI.Label>
                        </BI.HorizontalLayout>
                        <BI.HorizontalLayout>
                            <BI.Label text="        type:" cls={'code'}></BI.Label>
                            <BI.Label text='"at"' cls="code highlight"></BI.Label>
                            <BI.Label text="," cls={'code'}></BI.Label>
                        </BI.HorizontalLayout>
                        <BI.HorizontalLayout>
                            <BI.Label text="        has_read: false," cls={'code'}></BI.Label>
                        </BI.HorizontalLayout>
                        <BI.HorizontalLayout>
                            <BI.Label text="        author: {" cls={'code'}></BI.Label>
                        </BI.HorizontalLayout>
                        <BI.HorizontalLayout>
                            <BI.Label text="          loginname:" cls={'code'}></BI.Label>
                            <BI.Label text='"alsotang"' cls="code highlight"></BI.Label>
                            <BI.Label text="," cls={'code'}></BI.Label>
                        </BI.HorizontalLayout>
                        <BI.HorizontalLayout>
                            <BI.Label text="          avatar_url:" cls={'code'}></BI.Label>
                            <BI.Label text='"https://avatars.githubusercontent.com/u/1147375?v=2"' cls="code highlight"></BI.Label>
                        </BI.HorizontalLayout>
                        <BI.HorizontalLayout>
                            <BI.Label text="        }," cls={'code'}></BI.Label>
                        </BI.HorizontalLayout>
                        <BI.HorizontalLayout>
                            <BI.Label text="        topic: {" cls={'code'}></BI.Label>
                        </BI.HorizontalLayout>
                        <BI.HorizontalLayout>
                            <BI.Label text="           id: " cls={'code'}></BI.Label>
                            <BI.Label text='"542d6ecb9ecb3db94b2b3d0f"' cls="code highlight"></BI.Label>
                            <BI.Label text="," cls={'code'}></BI.Label>
                        </BI.HorizontalLayout>
                        <BI.HorizontalLayout>
                            <BI.Label text="          title:" cls={'code'}></BI.Label>
                            <BI.Label text='"adfadfadfasdf"' cls="code highlight"></BI.Label>
                            <BI.Label text="," cls={'code'}></BI.Label>
                        </BI.HorizontalLayout>
                        <BI.HorizontalLayout>
                            <BI.Label text="          last_reply_at: " cls={'code'}></BI.Label>
                            <BI.Label text='"2014-10-18T07:47:22.563Z"' cls="code highlight"></BI.Label>
                        </BI.HorizontalLayout>
                        <BI.HorizontalLayout>
                            <BI.Label text="        reply: {" cls={'code'}></BI.Label>
                        </BI.HorizontalLayout>
                        <BI.HorizontalLayout>
                            <BI.Label text="           id: " cls={'code'}></BI.Label>
                            <BI.Label text='"543fb7abae523bbc80412b24"' cls="code highlight"></BI.Label>
                            <BI.Label text="," cls={'code'}></BI.Label>
                        </BI.HorizontalLayout>
                        <BI.HorizontalLayout>
                            <BI.Label text="          content:" cls={'code'}></BI.Label>
                            <BI.Label text='"[@alsotang](/user/alsotang) 哈哈"' cls="code highlight"></BI.Label>
                            <BI.Label text="," cls={'code'}></BI.Label>
                        </BI.HorizontalLayout>
                        <BI.Label text="          ups: [ ]," cls={'code'}></BI.Label>
                        <BI.HorizontalLayout>
                            <BI.Label text="          create_at: " cls={'code'}></BI.Label>
                            <BI.Label text='"2014-10-16T12:17:22.566Z"' cls="code highlight"></BI.Label>
                        </BI.HorizontalLayout>
                        <BI.HorizontalLayout>
                            <BI.Label text="          }" cls={'code'}></BI.Label>
                        </BI.HorizontalLayout>
                        <BI.HorizontalLayout>
                            <BI.Label text="        }," cls={'code'}></BI.Label>
                        </BI.HorizontalLayout>
                        <BI.HorizontalLayout>
                            <BI.Label text="    ..." cls={'code'}></BI.Label>
                        </BI.HorizontalLayout>
                        <BI.HorizontalLayout>
                            <BI.Label text="    ]" cls={'code'}></BI.Label>
                        </BI.HorizontalLayout>
                        <BI.HorizontalLayout>
                            <BI.Label text="  }" cls={'code'}></BI.Label>
                        </BI.HorizontalLayout>
                        <BI.Label text="}" cls={'code'}></BI.Label>
                    </BI.VerticalLayout>
                    <BI.Label text="post /message/mark_all 标记全部已读" cls={'h4'} textAlign="left"></BI.Label>
                    <BI.Label text="接收 post 参数" cls={'p'} textAlign="left"></BI.Label>
                    <BI.VerticalLayout>
                        <BI.HorizontalLayout cls="list">
                            <BI.CenterLayout width={5.78} height={30}>
                                <BI.IconButton cls={'dot-h-font'}></BI.IconButton>
                            </BI.CenterLayout>
                            <BI.Label text="  accesstoken " cls={'article'}></BI.Label>
                            <BI.Label text="String" cls={'code'}></BI.Label>
                        </BI.HorizontalLayout>
                    </BI.VerticalLayout>
                    <BI.Label text="返回值示例" cls={'p'} textAlign="left"></BI.Label>
                    <BI.VerticalLayout cls={'pre'}>
                        <BI.Label text="{success: true," cls={'code'}></BI.Label>
                        <BI.HorizontalLayout>
                            <BI.Label text=" marked_msgs: [ { id:" cls={'code'}></BI.Label>
                            <BI.Label text="'544ce385aeaeb5931556c6f9'" cls="code highlight"></BI.Label>
                            <BI.Label text="} ] }" cls={'code'}></BI.Label>
                        </BI.HorizontalLayout>
                    </BI.VerticalLayout>
                    <BI.Label text="post /message/mark_one/:msg_id 标记单个消息为已读" cls={'h4'} textAlign="left"></BI.Label>
                    <BI.HorizontalLayout cls={'p'}>
                        <BI.Label text="请求示例: "></BI.Label>
                        <BI.A text={'/message/mark_one/58ec7d39da8344a81eee0c14'} href="https://cnodejs.org/message/mark_one/58ec7d39da8344a81eee0c14"></BI.A>
                    </BI.HorizontalLayout>
                    <BI.Label text="接收 post 参数" cls={'p'} textAlign="left"></BI.Label>
                    <BI.VerticalLayout>
                        <BI.HorizontalLayout cls="list">
                            <BI.CenterLayout width={5.78} height={30}>
                                <BI.IconButton cls={'dot-h-font'}></BI.IconButton>
                            </BI.CenterLayout>
                            <BI.Label text="  accesstoken " cls={'article'}></BI.Label>
                            <BI.Label text="String" cls={'code'}></BI.Label>
                        </BI.HorizontalLayout>
                    </BI.VerticalLayout>
                    <BI.Label text="返回值示例" cls={'p'} textAlign="left"></BI.Label>
                    <BI.VerticalLayout cls={'pre'}>
                        <BI.HorizontalLayout>
                            <BI.Label text="{" cls={'code'}></BI.Label>
                        </BI.HorizontalLayout>
                        <BI.Label text=" success: true," cls={'code'}></BI.Label>
                        <BI.HorizontalLayout>
                            <BI.Label text=" marked_msg_id:" cls={'code'}></BI.Label>
                            <BI.Label text='"58ec7d39da8344a81eee0c14"' cls="code highlight"></BI.Label>
                        </BI.HorizontalLayout>
                        <BI.Label text="}" cls={'code'}></BI.Label>
                    </BI.VerticalLayout>
                    <BI.Label text="知识点" cls={'h3'} textAlign="left"></BI.Label>
                    <BI.AbsoluteLayout>
                        <BI.Label text="1." cls={'one'}></BI.Label>
                    </BI.AbsoluteLayout>
                    <BI.Label
                        text="如何获取 accessToken？用户登录后，在设置页面可以看到自己的 accessToken。建议各移动端应用使用手机扫码的形式登录，验证使用 "
                        textAlign="left"
                        cls={'article left'}
                    ></BI.Label>
                    <BI.Label text="/accesstoken" cls={'code'}></BI.Label>
                    <BI.Label text=" 接口，登录后" textAlign="left" cls="article"></BI.Label>
                    <BI.Label text="长期保存 accessToken。" textAlign="left" cls="article left bottom"></BI.Label>
                </BI.VerticalLayout>
            </BI.VerticalLayout>
        );
    }
}
