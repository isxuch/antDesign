<template>
    <a-layout id="menuBox">
        <a-layout-sider :trigger="null" collapsible v-model="collapsed">
            <div class="system-top" v-show="!collapsed">
                <a-icon type="home" />
                <span>GNS</span>
                快捷菜单
                <a-icon type="caret-down" />
            </div>
            <div class="logo-no" v-show="collapsed"></div>
            <div class="logo" v-show="!collapsed">
                <img src="../assets/gnsLogo.png" alt />
            </div>
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
                <a-row>
                    <a-col :span="1" :xs="7" :sm="1">
                        <a-icon
                            class="trigger"
                            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                            @click="toggleCollapsed()"
                        />
                    </a-col>
                    <a-col :span="23" :xs="17" :sm="23">
                        <div class="head-list">
                            <div class="left">
                                <div class="item">
                                    <a-icon type="alipay-circle" />支付宝
                                </div>
                            </div>
                            <div class="right">
                                <a-icon type="cloud-download" />
                                <a-icon type="delete" />
                                <a-icon type="cloud-sync" />
                                <span>
                                    <a-popover placement="bottom">
                                        <template slot="content">
                                            <p>所属公司：申通国际</p>
                                            <a-button @click="showModal" type="primary" block>退出</a-button>
                                        </template>
                                        欢迎，贤心
                                    </a-popover>
                                </span>
                                <a-icon type="caret-down" />
                            </div>
                        </div>
                    </a-col>
                </a-row>
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
        <a-modal
            title="温馨提示"
            :visible="visible"
            @ok="handleOk"
            :confirmLoading="confirmLoading"
            @cancel="handleCancel"
            cancelText="取消"
            okText="确定"
        >
            <p>{{ModalText}}</p>
        </a-modal>
    </a-layout>
</template>
<script>
import { Menu } from "ant-design-vue";
import { menuList } from '../assets/data'
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
            list: menuList,
            ModalText: "确定退出登陆吗？",
            visible: false,
            confirmLoading: false
        };
    },
    created(){
    },
    methods: {
        // 头部菜单栏切换
        change(activeKey) {
            console.log(activeKey, "activeKey");
        },
        // 左侧菜单大小风格切换
        toggleCollapsed() {
            this.collapsed = !this.collapsed;
        },
        callback(key) {
            console.log(key);
        },
        onEdit(targetKey, action) {
            this[action](targetKey);
        },
        // 添加菜单
        add(data) {
            console.log(data, "4555");
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
        // 移除菜单
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
        },
        // 退出登陆确认框
        showModal() {
            this.visible = true;
        },
        handleOk(e) {
            this.confirmLoading = true;
            setTimeout(() => {
                this.visible = false;
                this.confirmLoading = false;
                this.$message.success('退出成功');
            }, 2000);
        },
        handleCancel(e) {
            this.visible = false;
        }
    }
};
</script>
<style lang="less">
#menuBox {
    height: 100%;
}
#menuBox .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
}

#menuBox .trigger:hover {
    color: #1890ff;
}

#menuBox .logo {
    text-align: center;
    margin: 16px;
}

.logo-no {
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.3);
    margin: 20px;
}

.head-list {
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: space-between;
    .right {
        i {
            margin-right: 20px;
            cursor: pointer;
        }
        span {
            margin-right: 6px;
        }
    }
}

.system-top {
    text-align: center;
    color: #fff;
    padding-top: 20px;
    span {
        margin: 0 8px 0 10px;
    }
}

.ant-tabs-bar {
    background: #fff;
    border-top: 1px solid #e8e8e8;
}
</style>
