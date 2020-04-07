<template>
    <a-layout id="components-layout-demo-custom-trigger">
        <a-layout-sider :trigger="null" collapsible v-model="collapsed">
            <div class="logo"></div>
            <a-menu
                :defaultSelectedKeys="['1']"
                :defaultOpenKeys="['1']"
                mode="inline"
                theme="dark"
                :inlineCollapsed="collapsed"
            >
                <template v-for="item in list">
                    <a-menu-item v-if="!item.children" :key="item.key">
                        <a-icon type="pie-chart" />
                        <span>{{item.title}}</span>
                    </a-menu-item>
                    <sub-menu v-else :menu-info="item" @click="add(item)" :key="item.key" />
                </template>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0">
                <a-icon
                    class="trigger"
                    :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                    @click="toggleCollapsed()"
                />
            </a-layout-header>
            <a-layout-content>
                <a-tabs
                    v-model="activeKey"
                    type="line"
                    @edit="onEdit"
                    @prevClick="callback"
                    @nextClick="callback"
                    @change="change"
                >
                    <a-tab-pane
                        v-for="pane in panes"
                        :tab="pane.title"
                        :key="pane.key"
                        :closable="pane.closable"
                    >{{pane.content}}</a-tab-pane>
                    <!-- <a-tab-pane v-for="i in 30" :tab="`Tab-${i}`" :key="i">Content of tab {{i}}</a-tab-pane> -->
                </a-tabs>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>
<script>
import { Menu } from "ant-design-vue";
const SubMenu = {
    template: `
      <a-sub-menu :key="menuInfo.key" v-bind="$props" v-on="$listeners">
        <span slot="title">
          <a-icon :type="menuInfo.icon" /><span>{{ menuInfo.title }}</span>
        </span>
        <template v-for="item in menuInfo.children">
          <a-menu-item v-if="!item.children" :key="item.key">
            <span>{{ item.title }}</span>
          </a-menu-item>
          <sub-menu v-else :key="item.key" :menu-info="item" />
        </template>
      </a-sub-menu>
    `,
    name: "SubMenu",
    // must add isSubMenu: true
    isSubMenu: true,
    props: {
        ...Menu.SubMenu.props,
        // Cannot overlap with properties within Menu.SubMenu.props
        menuInfo: {
            type: Object,
            default: () => ({})
        }
    }
};
export default {
    components: {
        "sub-menu": SubMenu
    },
    data() {
        const panes = [
            {
                title: "首页",
                content: "Content of Tab 3",
                key: "3",
                closable: false
            },
            { title: "Tab 1", content: "Content of Tab 1", key: "1" },
            { title: "Tab 2", content: "Content of Tab 2", key: "2" }
        ];
        return {
            collapsed: false,
            activeKey: panes[0].key,
            panes,
            newTabIndex: 0,
            list: [
                {
                    key: "1",
                    title: "菜单一",
                    icon: "alipay-circle",
                    children: [
                        {
                            key: "101",
                            title: "系统入口"
                        },
                        {
                            key: "102",
                            title: "盟商产品"
                        },
                        {
                            key: "103",
                            title: "文件下载"
                        },
                        {
                            key: "104",
                            title: "升级公告"
                        }
                    ]
                },
                {
                    key: "2",
                    title: "菜单二",
                    icon: "github",
                    children: [
                        {
                            key: "201",
                            title: "订阅管理"
                        },
                        {
                            key: "202",
                            title: "推送记录"
                        },
                        {
                            key: "203",
                            title: "邮箱微信设置"
                        }
                    ]
                }
            ]
        };
    },
    methods: {
        change(activeKey) {
          console.log(activeKey,'activeKey');
        },
        toggleCollapsed() {
            this.collapsed = !this.collapsed;
        },
        callback(key) {
            console.log(key);
        },
        onEdit(targetKey, action) {
            this[action](targetKey);
        },
        add(data) {
          console.log(data,'4555')
            const panes = this.panes;
            const activeKey = `newTab${this.newTabIndex++}`;
            panes.push({
                title: "New Tab",
                content: "Content of new Tab",
                key: activeKey
            });
            this.panes = panes;
            this.activeKey = activeKey;
        },
        remove(targetKey) {
            let activeKey = this.activeKey;
            let lastIndex;
            this.panes.forEach((pane, i) => {
                if (pane.key === targetKey) {
                    lastIndex = i - 1;
                }
            });
            const panes = this.panes.filter(pane => pane.key !== targetKey);
            if (panes.length && activeKey === targetKey) {
                if (lastIndex >= 0) {
                    activeKey = panes[lastIndex].key;
                } else {
                    activeKey = panes[0].key;
                }
            }
            this.panes = panes;
            this.activeKey = activeKey;
        }
    }
};
</script>
<style lang="less">
#components-layout-demo-custom-trigger {
    height: 100%;
}
#components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
}

.ant-tabs-bar {
    background: #fff;
    border-top: 1px solid #e8e8e8;
}
</style>
