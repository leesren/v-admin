<template>
  <div class=" bg-white">
    <div class="fbox">
      <div class="over-hi pr40">
        <div style="width:280px;" class="pt40 panel-box bg-white plr15">
          <a-form>
            <a-form-item style="margin-bottom:0px;">
              <a-form-item :style="{ marginBottom: '5px', display: 'inline-block', width: '45%' }">
                <a-date-picker style="width: 100%" />
              </a-form-item>
              <span :style="{ display: 'inline-block', width: '10%', textAlign: 'center' }">
                -
              </span>
              <a-form-item :style="{ marginBottom: '5px', display: 'inline-block', width: '45%' }">
                <a-date-picker style="width: 100%" />
              </a-form-item>
            </a-form-item>
            <a-form-item style="margin-bottom:0px;">
              <a-select default-value="1">
                <a-select-option value="1">
                  客户 1
                </a-select-option>
                <a-select-option value="2">
                  客户 2
                </a-select-option>
                <a-select-option value="3">
                  客户 3
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-form>
          <div class="mt20">
            <div class="fbox-vc ptb8">
              <a-icon class="fs16" type="team" />
              <span class="pl10">客户总览</span>
            </div>
            <div class="fs13">
              <div class="fbox-vc item-cell flex-hb active">
                <div class="flex1">客户数</div>
                <div>46,322</div>
              </div>
              <div class="fbox-vc item-cell flex-hb">
                <div class="flex1">两融客户数</div>
                <div>46,322</div>
              </div>
              <div class="fbox-vc item-cell flex-hb">
                <div class="flex1">两融客户数</div>
                <div>46,322</div>
              </div>
              <div class="fbox-vc item-cell flex-hb">
                <div class="flex1">两融客户数</div>
                <div>46,322</div>
              </div>
              <div class="fbox-vc item-cell flex-hb">
                <div class="flex1 tx-hi1">高净值客户数(>=30万)</div>
                <div>6,322</div>
              </div>
            </div>
          </div>
          <div class="mt20 pb30">
            <div class="fbox-vc ptb8">
              <a-icon class="fs16" type="team" />
              <span class="pl10">团队分析</span>
            </div>
            <div class="fs13">
              <div class="fbox-vc item-cell flex-hb active">
                <div class="flex1">客户数</div>
                <div>46,322</div>
              </div> 
            </div>
          </div>
        </div>
      </div>
      <div class="flex1 pt30">
        <div class="">
          <a-tabs defaultActiveKey="1">
            <a-tab-pane tab="客户数" key="1">Content of Tab Pane 1</a-tab-pane>
            <a-tab-pane tab="信用客户数" key="2" forceRender>Content of Tab Pane 2</a-tab-pane>
            <a-tab-pane tab="期权客户数" key="3">Content of Tab Pane 3</a-tab-pane>
            <a-tab-pane tab="有效客户数" key="4">Content of Tab Pane 3</a-tab-pane>
            <a-tab-pane tab="高净值客户数" key="5">Content of Tab Pane 3</a-tab-pane>
            <a-tab-pane tab="富裕客户数" key="6">Content of Tab Pane 3</a-tab-pane>
          </a-tabs>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.active {
  background-color: #999;
  color: white;
}
.item-cell {
  padding: 8px 15px 8px 28px;
}
.panel-box {
  height: calc(100vh - 80px);
  box-shadow: 0px 1px 26px 5px rgba(46, 61, 73, 0.2);
}
</style>
