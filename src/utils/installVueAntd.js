import Vue from 'vue'
import {
  Button,
  install,
  message,
  notification,
  Affix,
  Anchor,
  AutoComplete,
  Alert,
  Avatar,
  BackTop,
  Badge,
  Breadcrumb,
  Calendar,
  Card,
  Collapse,
  Carousel,
  Cascader,
  Checkbox,
  Col,
  DatePicker,
  Divider,
  Dropdown,
  Form,
  Icon,
  Input,
  InputNumber,
  Layout,
  List,
  LocaleProvider,
  Menu,
  Modal,
  Pagination,
  Popconfirm,
  Popover,
  Progress,
  Radio,
  Rate,
  Row,
  Select,
  Slider,
  Spin,
  Statistic,
  Steps,
  Switch,
  Table,
  Transfer,
  Tree,
  TreeSelect,
  Tabs,
  Tag,
  TimePicker,
  Timeline,
  Tooltip,
  Upload,
  Drawer,
  Skeleton,
  ConfigProvider,
  version
} from 'ant-design-vue'
const TextArea = Input.TextArea
const components = [
  LocaleProvider,
  Switch,
  Input,
  InputNumber,
  Checkbox,
  Breadcrumb,
  DatePicker,
  Card,
  Form,
  Icon,
  Button,
  Table,
  Radio,
  Skeleton,
  ConfigProvider,
  Modal,
  Tabs,
  Select,
  Pagination,
  Drawer,
  BackTop,
  Menu,
  Tooltip,
  Layout,
  Spin,
  Row,
  Col,
  Popover,
  Popconfirm,
  Divider,
  Dropdown,
  TextArea
]
export default {
  version: version,
  install: installVueAntd
}

function installVueAntd() {
  components.map(function(component) {
    Vue.use(component)
  })
  Vue.prototype.$message = message
  Vue.prototype.$notification = notification
  Vue.prototype.$info = Modal.info
  Vue.prototype.$success = Modal.success
  Vue.prototype.$error = Modal.error
  Vue.prototype.$warning = Modal.warning
  Vue.prototype.$confirm = Modal.confirm
  // @ts-ignore
  Vue.prototype.$destroyAll = Modal.destroyAll
}
