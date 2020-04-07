import Vue from 'vue';
import Antd, {
    Button,
    Icon,
    Row,
    Col,
    Divider,
    Layout,
    Breadcrumb,
    Dropdown,
    Menu,
    Pagination,
    AutoComplete,
    Checkbox,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Rate,
    Select,
    Transfer,
    TimePicker,
    TreeSelect,
    Upload,
    Avatar,
    Card,
    Carousel,
    Collapse,
    List,
    Popover,
    Table,
    Tabs,
    Tag,
    Tooltip,
    Tree,
    Alert,
    Drawer,
    Modal,
    Progress,
    Popconfirm,
    Spin,
    LocaleProvider,
    message,
    Switch,
    Badge,
    Steps,
    Cascader
} from 'ant-design-vue';

Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Icon.name, Icon);

Vue.component(Divider.name, Divider);
Vue.component(Badge.name, Badge);


Vue.component(Layout.name, Layout);
Vue.component(Layout.Header.name, Layout.Header);
Vue.component(Layout.Footer.name, Layout.Footer);
Vue.component(Layout.Sider.name, Layout.Sider);
Vue.component(Layout.Content.name, Layout.Content);

Vue.component(Breadcrumb.name, Breadcrumb);
Vue.component(Breadcrumb.Item.name, Breadcrumb.Item);
Vue.component(Dropdown.name, Dropdown);

Vue.component(Menu.name, Menu);
Vue.component(Menu.Item.name, Menu.Item);
Vue.component(Menu.SubMenu.name, Menu.SubMenu);
Vue.component(Menu.Divider.name, Menu.Divider);
Vue.component(Menu.ItemGroup.name, Menu.ItemGroup);

Vue.component(Pagination.name, Pagination);

Vue.component(AutoComplete.name, AutoComplete);
Vue.component(AutoComplete.Option.name, AutoComplete.Option);
Vue.component(AutoComplete.OptGroup.name, AutoComplete.OptGroup);

Vue.component(AutoComplete.name, AutoComplete);
Vue.component(AutoComplete.Option.name, AutoComplete.Option);
Vue.component(AutoComplete.OptGroup.name, AutoComplete.OptGroup);

Vue.component(Checkbox.name, Checkbox);
Vue.component(Checkbox.Group.name, Checkbox.Group);

Vue.component(DatePicker.name, DatePicker);
Vue.component(DatePicker.RangePicker.name, DatePicker.RangePicker);
Vue.component(DatePicker.MonthPicker.name, DatePicker.MonthPicker);
Vue.component(DatePicker.WeekPicker.name, DatePicker.WeekPicker);

Vue.component(Form.name, Form);
Vue.component(Form.Item.name, Form.Item);
Vue.prototype.$form = Form;

Vue.component(Input.name, Input);
Vue.component(Input.Group.name, Input.Group);
Vue.component(Input.Search.name, Input.Search);
Vue.component(Input.TextArea.name, Input.TextArea);

Vue.component(InputNumber.name, InputNumber);

Vue.component(Radio.name, Radio);
Vue.component(Radio.Group.name, Radio.Group);
Vue.component(Radio.Button.name, Radio.Button);

Vue.component(Rate.name, Rate);

Vue.component(Select.name, Select);
Vue.component(Select.Option.name, Select.Option);
Vue.component(Select.OptGroup.name, Select.OptGroup);

Vue.component(Transfer.name, Transfer);

Vue.component(TimePicker.name, TimePicker);

Vue.component(TreeSelect.name, TreeSelect);
Vue.component(TreeSelect.TreeNode.name, TreeSelect.TreeNode);

Vue.component(Upload.name, Upload);

Vue.component(Avatar.name, Avatar);

Vue.component(Card.name, Card);
// Vue.component(Grid.name, Grid);

Vue.component(Carousel.name, Carousel);
Vue.component(Collapse.name, Collapse);
Vue.component(Collapse.Panel.name, Collapse.Panel);

Vue.component(List.name, List);
Vue.component(List.Item.name, List.Item);
Vue.component(List.Item.Meta.name, List.Item.Meta);

Vue.component(Popover.name, Popover);
Vue.component(Table.name, Table);
Vue.component(Table.Column.name, Table.Column);
Vue.component(Table.ColumnGroup.name, Table.ColumnGroup);

Vue.component(Tabs.name, Tabs);
Vue.component(Tabs.TabPane.name, Tabs.TabPane);
Vue.component(Tabs.TabContent.name, Tabs.TabContent);

Vue.component(Tag.name, Tag);
Vue.component(Tag.CheckableTag.name, Tag.CheckableTag);

Vue.component(Tooltip.name, Tooltip);
Vue.component(Tree.name, Tree);
Vue.component(Tree.TreeNode.name, Tree.TreeNode);

Vue.component(Alert.name, Alert);
Vue.component(Drawer.name, Drawer);
Vue.component(Modal.name, Modal);
Vue.prototype.$confirm = Modal.confirm;
Vue.component(Progress.name, Progress);
Vue.component(Spin.name, Spin);
Vue.component(LocaleProvider.name, LocaleProvider);
Vue.component(Popconfirm.name, Popconfirm);

Vue.component(Switch.name, Switch);

Vue.component(Steps.name, Steps);
Vue.component(Steps.Step.name, Steps.Step);
Vue.component(Cascader.name, Cascader);

Vue.prototype.$message = message;
Vue.prototype.$success = message.success;
Vue.prototype.$error = message.error;
Vue.prototype.$warn = message.warn;

message.config({
    duration: 1.5
});