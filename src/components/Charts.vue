<template>
  <div>
    <a-button @click="initCharts(data2018)" type="primary">2018数据</a-button>
    <a-button @click="initCharts(data2017)" type="primary">2017数据</a-button>
    <a-button @click="initCharts(data2016)" type="primary">2016数据</a-button>
    <div id="chartmain-box">
      <div id="chartmain"></div>
    </div>
    <div id="table2018" v-show="this.year==2018">
      <table class="table-total" border="1">
        <tr>
          <td>项目</td>
          <td>人数</td>
          <td>占比</td>
        </tr>
        <tr>
          <td>就业</td>
          <td>62</td>
          <td>59.6%</td>
        </tr>
        <tr>
          <td>升学</td>
          <td>42</td>
          <td>40.4%</td>
        </tr>
      </table>
      <table border="1">
        <tr>
          <th>专业</th>
          <th>姓名</th>
          <th>工作单位</th>
          <th>生源地区</th>
          <th>去向省份</th>
          <th>单位性质</th>
          <th>职位类型</th>
          <th>就业方式</th>
          <th>单位地址</th>
        </tr>
        <tr>
          <td>公共事业管理</td>
          <td>刘同学</td>
          <td>伦敦国王学院</td>
          <td>东北地区</td>
          <td>——</td>
          <td>——</td>
          <td>——</td>
          <td>出国留学</td>
          <td>英国伦敦</td>
        </tr>
        <tr>
          <td>公共事业管理</td>
          <td>孙同学</td>
          <td>烟台经济技术开发区教育体育局</td>
          <td>华东地区</td>
          <td>山东</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>山东省烟台开发区长江路1号教体局</td>
        </tr>
        <tr>
          <td>公共事业管理</td>
          <td>李同学</td>
          <td>烟台经济技术开发区教育体育局</td>
          <td>华东地区</td>
          <td>山东</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>山东省烟台开发区长江路1号教体局</td>
        </tr>
        <tr>
          <td>公共事业管理</td>
          <td>刘同学</td>
          <td>青岛实验学校</td>
          <td>华东地区</td>
          <td>山东</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>山东省青岛市高新区华中路111号</td>
        </tr>
        <tr>
          <td>公共事业管理</td>
          <td>刘同学</td>
          <td>湖南岳阳雅礼学校</td>
          <td>华南地区</td>
          <td>湖南</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>湖南省岳阳市岳阳县岳荣公路(S201)民康康复医院斜对面</td>
        </tr>
        <tr>
          <td>公共事业管理</td>
          <td>谢同学</td>
          <td>河南省许昌实验中学</td>
          <td>华中地区</td>
          <td>河南</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>河南省许昌市魏都区三八路东段</td>
        </tr>
        <tr>
          <td>公共事业管理</td>
          <td>朱同学</td>
          <td>东北师范大学</td>
          <td>华南地区</td>
          <td>吉林</td>
          <td></td>
          <td>硕士研究生</td>
          <td>升学</td>
          <td>长春市人民大街5268号</td>
        </tr>
        <tr>
          <td>公共事业管理</td>
          <td>王同学</td>
          <td>北京师范大学</td>
          <td>华南地区</td>
          <td>北京</td>
          <td></td>
          <td>硕士研究生</td>
          <td>升学</td>
          <td>北京市海淀区新街口外大街19号</td>
        </tr>
        <tr>
          <td>公共事业管理</td>
          <td>杨同学</td>
          <td>华东师范大学</td>
          <td>华中地区</td>
          <td>上海</td>
          <td></td>
          <td>硕士研究生</td>
          <td>升学</td>
          <td>上海市普陀区中山北路3663号</td>
        </tr>
        <tr>
          <td>公共事业管理</td>
          <td>张同学</td>
          <td>华中师范大学</td>
          <td>西南地区</td>
          <td>武汉</td>
          <td></td>
          <td>硕士研究生</td>
          <td>升学</td>
          <td>武汉市珞喻路152号(近卓刀泉南路)</td>
        </tr>
        <tr>
          <td>公共事业管理</td>
          <td>谭同学</td>
          <td>北京师范大学</td>
          <td>西南地区</td>
          <td>北京</td>
          <td></td>
          <td>硕士研究生</td>
          <td>升学</td>
          <td>北京市海淀区新街口外大街19号</td>
        </tr>
        <tr>
          <td>公共事业管理</td>
          <td>张同学</td>
          <td>东北师范大学</td>
          <td>华东地区</td>
          <td>吉林</td>
          <td></td>
          <td>硕士研究生</td>
          <td>升学</td>
          <td>长春市人民大街5268号</td>
        </tr>
        <tr>
          <td>公共事业管理</td>
          <td>张同学</td>
          <td>东北师范大学</td>
          <td>华中地区</td>
          <td>吉林</td>
          <td></td>
          <td>硕士研究生</td>
          <td>升学</td>
          <td>长春市人民大街5268号</td>
        </tr>
        <tr>
          <td>公共事业管理</td>
          <td>高同学</td>
          <td>东北师范大学</td>
          <td>华南地区</td>
          <td>吉林</td>
          <td></td>
          <td>硕士研究生</td>
          <td>升学</td>
          <td>长春市人民大街5268号</td>
        </tr>
        <tr>
          <td>教育学</td>
          <td>周同学</td>
          <td>湖南省长郡浏阳实验学校</td>
          <td>华南地区</td>
          <td>湖南</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>湖南省长沙市浏阳市经济开发区长郡路1号</td>
        </tr>
        <tr>
          <td>教育学</td>
          <td>许同学</td>
          <td>绵阳京东方光电科技有限公司</td>
          <td>东北地区</td>
          <td>四川</td>
          <td>公司企业</td>
          <td>职员</td>
          <td>签就业协议书</td>
          <td>绵阳高新区科发大道中段198号</td>
        </tr>
        <tr>
          <td>教育学</td>
          <td>李同学</td>
          <td>北京新东方教育培训集团</td>
          <td>东北地区</td>
          <td>北京</td>
          <td>公司企业</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>北京市海淀区中关村南大街17号3号楼</td>
        </tr>
        <tr>
          <td>教育学</td>
          <td>张同学</td>
          <td>北京干部培训学校</td>
          <td>西南地区</td>
          <td>北京</td>
          <td>事业单位</td>
          <td>职员</td>
          <td>签就业协议书</td>
          <td>北京市怀柔区雁秀路8号</td>
        </tr>
        <tr>
          <td>教育学</td>
          <td>程同学</td>
          <td>二道区新太小学</td>
          <td>东北地区</td>
          <td>吉林</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>长春市二道区八里堡新乡路23号</td>
        </tr>
        <tr>
          <td>教育学</td>
          <td>陈同学</td>
          <td>东莞东城实验小学</td>
          <td>华南地区</td>
          <td>广东</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>东莞市牛山社区钟屋围伟民路</td>
        </tr>
        <tr>
          <td>教育学</td>
          <td>冯同学</td>
          <td>学易优教育培训集团</td>
          <td>华中地区</td>
          <td>广东</td>
          <td>公司企业</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>广东省东莞市市辖区新莞悦大厦2层</td>
        </tr>
        <tr>
          <td>教育学</td>
          <td>张同学</td>
          <td>东北师范大学</td>
          <td>东北地区</td>
          <td>吉林</td>
          <td></td>
          <td>硕士研究生</td>
          <td>升学</td>
          <td>长春市人民大街5268号</td>
        </tr>
        <tr>
          <td>教育学</td>
          <td>许同学</td>
          <td>东北师范大学</td>
          <td>东北地区</td>
          <td>吉林</td>
          <td></td>
          <td>硕士研究生</td>
          <td>升学</td>
          <td>长春市人民大街5268号</td>
        </tr>
        <tr>
          <td>教育学</td>
          <td>吴同学</td>
          <td>东北师范大学</td>
          <td>东北地区</td>
          <td>吉林</td>
          <td></td>
          <td>硕士研究生</td>
          <td>升学</td>
          <td>长春市人民大街5268号</td>
        </tr>
        <tr>
          <td>教育学</td>
          <td>旋同学</td>
          <td>东北师范大学</td>
          <td>东北地区</td>
          <td>吉林</td>
          <td></td>
          <td>硕士研究生</td>
          <td>升学</td>
          <td>长春市人民大街5268号</td>
        </tr>
        <tr>
          <td>教育学</td>
          <td>陶同学</td>
          <td>北京师范大学</td>
          <td>西南地区</td>
          <td>北京</td>
          <td></td>
          <td>硕士研究生</td>
          <td>升学</td>
          <td>北京市海淀区新街口外大街19号</td>
        </tr>
        <tr>
          <td>教育学</td>
          <td>刘同学</td>
          <td>南京师范大学</td>
          <td>东北地区</td>
          <td>江苏</td>
          <td></td>
          <td>硕士研究生</td>
          <td>升学</td>
          <td>江苏省南京市近郊栖霞区文苑路1号</td>
        </tr>
        <tr>
          <td>教育学</td>
          <td>刘同学</td>
          <td>东北师范大学</td>
          <td>华东地区</td>
          <td>吉林</td>
          <td></td>
          <td>硕士研究生</td>
          <td>升学</td>
          <td>长春市人民大街5268号</td>
        </tr>
        <tr>
          <td>教育学</td>
          <td>郭同学</td>
          <td>厦门大学</td>
          <td>华北地区</td>
          <td>福建</td>
          <td></td>
          <td>硕士研究生</td>
          <td>升学</td>
          <td>福建省厦门市思明区思明南路422号</td>
        </tr>
        <tr>
          <td>教育学</td>
          <td>周同学</td>
          <td>东北师范大学</td>
          <td>华东地区</td>
          <td>吉林</td>
          <td></td>
          <td>硕士研究生</td>
          <td>升学</td>
          <td>长春市人民大街5268号</td>
        </tr>
        <tr>
          <td>教育学</td>
          <td>景同学</td>
          <td>东北师范大学</td>
          <td>华北地区</td>
          <td>吉林</td>
          <td></td>
          <td>硕士研究生</td>
          <td>升学</td>
          <td>长春市人民大街5268号</td>
        </tr>
        <tr>
          <td>教育学</td>
          <td>郭同学</td>
          <td>厦门大学</td>
          <td>华东地区</td>
          <td>福建</td>
          <td></td>
          <td>硕士研究生</td>
          <td>升学</td>
          <td>福建省厦门市思明区思明南路422号</td>
        </tr>
        <tr>
          <td>小学教育</td>
          <td>佟同学</td>
          <td>沈阳市和平区和平大街第一小学</td>
          <td>东北地区</td>
          <td>辽宁</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>辽宁省沈阳市和平区南昌街5号</td>
        </tr>
        <tr>
          <td>小学教育</td>
          <td>麦同学</td>
          <td>新疆巴里坤县海子沿乡中心校</td>
          <td>西北地区</td>
          <td>新疆</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>新疆巴里坤县海子沿乡二村</td>
        </tr>
        <tr>
          <td>小学教育</td>
          <td>努同学</td>
          <td>新疆库尔勒市教育局</td>
          <td>西北地区</td>
          <td>新疆</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>新疆库尔勒市</td>
        </tr>
        <tr>
          <td>小学教育</td>
          <td>陈同学</td>
          <td>厦门市思明区属小学</td>
          <td>华东地区</td>
          <td>福建</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>厦门市思明区禾祥东路168号1203室</td>
        </tr>
        <tr>
          <td>小学教育</td>
          <td>纪同学</td>
          <td>厦门市同安区教育局区属学校</td>
          <td>华东地区</td>
          <td>福建</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>厦门市同安区三秀路176号同安区教育局</td>
        </tr>
        <tr>
          <td>小学教育</td>
          <td>许同学</td>
          <td>厦门市思明区属小学</td>
          <td>华东地区</td>
          <td>福建</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>厦门市思明区禾祥东路168号1203室</td>
        </tr>
        <tr>
          <td>小学教育</td>
          <td>吕同学</td>
          <td>厦门市同安区教育局区属学校</td>
          <td>华东地区</td>
          <td>福建</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>厦门市同安区三秀路176号同安区教育局</td>
        </tr>
        <tr>
          <td>小学教育</td>
          <td>黄同学</td>
          <td>厦门市同安区教育局区属学校</td>
          <td>华东地区</td>
          <td>福建</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>厦门市同安区三秀路176号同安区教育局</td>
        </tr>
        <tr>
          <td>小学教育</td>
          <td>吕同学</td>
          <td>厦门市海沧区教育局区属学校</td>
          <td>东北地区</td>
          <td>福建</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>厦门市海沧区滨湖北二路1号滨湖大厦七楼</td>
        </tr>
        <tr>
          <td>小学教育</td>
          <td>刘同学</td>
          <td>长春汽车经济技术开发区教育局人事科</td>
          <td>东北地区</td>
          <td>吉林</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>长春市经济技术开发区四联大街131号</td>
        </tr>
        <tr>
          <td>小学教育</td>
          <td>刁同学</td>
          <td>宁波市鄞州堇山小学</td>
          <td>华东地区</td>
          <td>浙江</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>宁波市鄞州区堇山中路666号</td>
        </tr>
        <tr>
          <td>小学教育</td>
          <td>麦同学</td>
          <td>新疆库尔勒市教育局</td>
          <td>西北地区</td>
          <td>新疆</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>新疆库尔勒市教育局</td>
        </tr>
        <tr>
          <td>小学教育</td>
          <td>唐同学</td>
          <td>广东省珠海市香洲区教育局</td>
          <td>华东地区</td>
          <td>广东</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>珠海市香洲区人民东路520号</td>
        </tr>
        <tr>
          <td>小学教育</td>
          <td>刘同学</td>
          <td>广东省珠海市香洲区教育局</td>
          <td>华东地区</td>
          <td>广东</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>珠海市香洲区人民东路521号</td>
        </tr>
        <tr>
          <td>小学教育</td>
          <td>图同学</td>
          <td>疏勒县第一中学</td>
          <td>西北地区</td>
          <td>新疆</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>新疆喀什疏勒县</td>
        </tr>
        <tr>
          <td>小学教育</td>
          <td>努同学</td>
          <td>阿克苏市教育局</td>
          <td>西北地区</td>
          <td>新疆</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>阿克苏市南大街3号</td>
        </tr>
        <tr>
          <td>小学教育</td>
          <td>韩同学</td>
          <td>青海省西宁市城西区教育局</td>
          <td>西北地区</td>
          <td>青海</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>青海省西宁市城西区五四大街21号</td>
        </tr>
        <tr>
          <td>小学教育</td>
          <td>韩同学</td>
          <td>青海省西宁市城西区教育局</td>
          <td>西北地区</td>
          <td>青海</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>青海省西宁市城西区五四大街21号</td>
        </tr>
        <tr>
          <td>小学教育</td>
          <td>张同学</td>
          <td>青海省西宁市城北区教育局</td>
          <td>西北地区</td>
          <td>青海</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>青海省西宁市城北区朝阳西路59号</td>
        </tr>
        <tr>
          <td>小学教育</td>
          <td>王同学</td>
          <td>青海省西宁市城中区教育局</td>
          <td>西北地区</td>
          <td>青海</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>青海省西宁市解放路4号</td>
        </tr>
        <tr>
          <td>小学教育</td>
          <td>薛同学</td>
          <td>长春高新区惠仁学校</td>
          <td>东北地区</td>
          <td>吉林</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>长春市高新区超达大路与超然街交汇</td>
        </tr>
        <tr>
          <td>小学教育</td>
          <td>梁同学</td>
          <td>广州市荔湾区詹天佑小学</td>
          <td>华东地区</td>
          <td>广东</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>广东省广州市荔湾区丛林路十二甫西街10号</td>
        </tr>
        <tr>
          <td>小学教育</td>
          <td>冼同学</td>
          <td>佛山市北外附校三水外国语学校</td>
          <td>华东地区</td>
          <td>广东</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>佛山市三水区西南街道江根村</td>
        </tr>
        <tr>
          <td>小学教育</td>
          <td>阿同学</td>
          <td>喀什市东城区第一高级中学</td>
          <td>西北地区</td>
          <td>新疆</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>新疆喀什市深喀大道教育局</td>
        </tr>
        <tr>
          <td>小学教育</td>
          <td>多同学</td>
          <td>西藏自治区教育局</td>
          <td>西北地区</td>
          <td>西藏</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>（具体工作学校等待教育局分配）</td>
        </tr>
        <tr>
          <td>小学教育</td>
          <td>沙同学</td>
          <td>新疆维吾尔族自治区教育厅</td>
          <td>西北地区</td>
          <td>新疆</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>（具体工作学校等待教育局分配）</td>
        </tr>
        <tr>
          <td>小学教育</td>
          <td>王同学</td>
          <td>北京中加学校</td>
          <td>东部沿海</td>
          <td>北京</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>北京市丛林庄园东路北京中加学校</td>
        </tr>
        <tr>
          <td>小学教育</td>
          <td>宋同学</td>
          <td>哈尔滨师范大学附属小学</td>
          <td>东北地区</td>
          <td>黑龙江</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>黑龙省哈尔滨市南岗区核和兴三道街1号</td>
        </tr>
        <tr>
          <td>小学教育</td>
          <td>奚同学</td>
          <td>东莞东城实验小学</td>
          <td>东北地区</td>
          <td>广东</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>东莞市牛山社区钟屋围伟民路</td>
        </tr>
        <tr>
          <td>小学教育</td>
          <td>关同学</td>
          <td>杭州市长寿桥小学</td>
          <td>东北地区</td>
          <td>浙江</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>杭州市孩儿巷234号</td>
        </tr>
        <tr>
          <td>小学教育</td>
          <td>姚同学</td>
          <td>哈尔滨师范大学附属小学</td>
          <td>东北地区</td>
          <td>黑龙江</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>黑龙省哈尔滨市南岗区核和兴三道街1号</td>
        </tr>
        <tr>
          <td>小学教育</td>
          <td>陈同学</td>
          <td>西宁市城东区教育局</td>
          <td>西北地区</td>
          <td>青海</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>西宁市城东区东关大街80号</td>
        </tr>
        <tr>
          <td>小学教育</td>
          <td>拉同学</td>
          <td>西藏自治区教育局</td>
          <td>西北地区</td>
          <td>西藏</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>（具体工作学校等待教育局分配）</td>
        </tr>
        <tr>
          <td>小学教育</td>
          <td>李同学</td>
          <td>东北师范大学</td>
          <td>西北地区</td>
          <td>吉林</td>
          <td></td>
          <td>硕士研究生</td>
          <td>升学</td>
          <td>长春市人民大街5268号</td>
        </tr>
        <tr>
          <td>小学教育</td>
          <td>马同学</td>
          <td>东北师范大学</td>
          <td>西北地区</td>
          <td>吉林</td>
          <td></td>
          <td>硕士研究生</td>
          <td>升学</td>
          <td>长春市人民大街5268号</td>
        </tr>
        <tr>
          <td>小学教育</td>
          <td>李同学</td>
          <td>北京师范大学</td>
          <td>东北地区</td>
          <td>北京</td>
          <td></td>
          <td>硕士研究生</td>
          <td>升学</td>
          <td>北京市海淀区新街口外大街19号</td>
        </tr>
        <tr>
          <td>小学教育</td>
          <td>李同学</td>
          <td>东北师范大学</td>
          <td>东北地区</td>
          <td>吉林</td>
          <td></td>
          <td>硕士研究生</td>
          <td>升学</td>
          <td>长春市人民大街5268号</td>
        </tr>
        <tr>
          <td>小学教育</td>
          <td>齐同学</td>
          <td>东北师范大学</td>
          <td>东北地区</td>
          <td>吉林</td>
          <td></td>
          <td>硕士研究生</td>
          <td>升学</td>
          <td>长春市人民大街5268号</td>
        </tr>
        <tr>
          <td>小学教育</td>
          <td>于同学</td>
          <td>东北师范大学</td>
          <td>东北地区</td>
          <td>吉林</td>
          <td></td>
          <td>硕士研究生</td>
          <td>升学</td>
          <td>长春市人民大街5268号</td>
        </tr>
        <tr>
          <td>小学教育</td>
          <td>赵同学</td>
          <td>北京师范大学</td>
          <td>东北地区</td>
          <td>北京</td>
          <td></td>
          <td>硕士研究生</td>
          <td>升学</td>
          <td>北京市海淀区新街口外大街19号</td>
        </tr>
        <tr>
          <td>小学教育</td>
          <td>韩同学</td>
          <td>东北师范大学</td>
          <td>东北地区</td>
          <td>吉林</td>
          <td></td>
          <td>硕士研究生</td>
          <td>升学</td>
          <td>长春市人民大街5268号</td>
        </tr>
        <tr>
          <td>小教教育</td>
          <td>徐同学</td>
          <td>成都市双流区机关幼儿园</td>
          <td>西南地区</td>
          <td>四川</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>成都市双流区东升街道贾家巷14号</td>
        </tr>
        <tr>
          <td>小教教育</td>
          <td>朱同学</td>
          <td>成都市双流区机关幼儿园</td>
          <td>西南地区</td>
          <td>四川</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>成都市双流区东升街道贾家巷14号</td>
        </tr>
        <tr>
          <td>小教教育</td>
          <td>王同学</td>
          <td>仙居县职业教育学校</td>
          <td>华东地区</td>
          <td>浙江</td>
          <td>中职教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>浙江省台州市安洲街道全塘村</td>
        </tr>
        <tr>
          <td>小教教育</td>
          <td>周同学</td>
          <td>湖南省衡阳市清华园学校</td>
          <td>华中地区</td>
          <td>湖南</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>衡阳市蒸湘区呆鹰岭街</td>
        </tr>
        <tr>
          <td>小教教育</td>
          <td>孟同学</td>
          <td>杭州市下城区京都实验幼托园</td>
          <td>华东地区</td>
          <td>杭州</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>杭州市下城区京都苑17幢</td>
        </tr>
        <tr>
          <td>小教教育</td>
          <td>周同学</td>
          <td>梅河口市第三幼儿园</td>
          <td>华中地区</td>
          <td>吉林</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>吉林省梅河口市滨河南街3116号</td>
        </tr>
        <tr>
          <td>小教教育</td>
          <td>马同学</td>
          <td>河南省郑州市郑东新区教育文化体育局</td>
          <td>华中地区</td>
          <td>河南</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>郑州市郑东新区熊儿河路与才高街交叉口东龙大厦808室</td>
        </tr>
        <tr>
          <td>小教教育</td>
          <td>李同学</td>
          <td>河南省郑州市郑东新区教育文化体育局</td>
          <td>华中地区</td>
          <td>河南</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>郑州市郑东新区熊儿河路与才高街交叉口东龙大厦808室</td>
        </tr>
        <tr>
          <td>小教教育</td>
          <td>蔡同学</td>
          <td>上海松江区教育局龙翔幼儿园</td>
          <td>华北地区</td>
          <td>上海</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>上海市松江区中山中路38号</td>
        </tr>
        <tr>
          <td>小教教育</td>
          <td>曹同学</td>
          <td>四川省绵阳市教育局</td>
          <td>西南地区</td>
          <td>四川</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>（具体工作学校等待教育局分配）</td>
        </tr>
        <tr>
          <td>小教教育</td>
          <td>张同学</td>
          <td>诸城市京师学校</td>
          <td>华东地区</td>
          <td>山东</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>山东省诸城市凤凰路1800号</td>
        </tr>
        <tr>
          <td>小教教育</td>
          <td>高同学</td>
          <td>潍坊歌尔教育投资有限公司</td>
          <td>东北地区</td>
          <td>山东</td>
          <td>公司企业</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>潍坊市高新区蓝色智谷801室</td>
        </tr>
        <tr>
          <td>小教教育</td>
          <td>黄同学</td>
          <td>济南天桥区黄河双语实验学校</td>
          <td>东北地区</td>
          <td>山东</td>
          <td>基础教育</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>山东省济南市天桥区蓝翔中路19号</td>
        </tr>
        <tr>
          <td>小教教育</td>
          <td>狄同学</td>
          <td>山东省潍坊市歌尔教育</td>
          <td>东北地区</td>
          <td>山东</td>
          <td>公司企业</td>
          <td>教师</td>
          <td>签就业协议书</td>
          <td>潍坊市奎文区卧龙东街2666号</td>
        </tr>
        <tr>
          <td>小教教育</td>
          <td>张同学</td>
          <td>山东省蓬莱市老干部活动中心</td>
          <td>华北地区</td>
          <td>山东</td>
          <td>事业单位</td>
          <td>公务员</td>
          <td>签就业协议书</td>
          <td>蓬莱市钟楼东路57号</td>
        </tr>
        <tr>
          <td>小教教育</td>
          <td>马同学</td>
          <td>华中师范大学</td>
          <td>华北地区</td>
          <td>武汉</td>
          <td></td>
          <td>硕士研究生</td>
          <td>升学</td>
          <td>武汉市珞喻路152号(近卓刀泉南路)</td>
        </tr>
        <tr>
          <td>小教教育</td>
          <td>颜同学</td>
          <td>华东师范大学</td>
          <td>华东地区</td>
          <td>上海</td>
          <td></td>
          <td>硕士研究生</td>
          <td>升学</td>
          <td>上海市普陀区中山北路3663号</td>
        </tr>
        <tr>
          <td>小教教育</td>
          <td>胡同学</td>
          <td>华中师范大学</td>
          <td>西南地区</td>
          <td>武汉</td>
          <td></td>
          <td>硕士研究生</td>
          <td>升学</td>
          <td>武汉市珞喻路152号(近卓刀泉南路)</td>
        </tr>
        <tr>
          <td>小教教育</td>
          <td>罗同学</td>
          <td>北京师范大学</td>
          <td>西南地区</td>
          <td>北京</td>
          <td></td>
          <td>硕士研究生</td>
          <td>升学</td>
          <td>北京市海淀区新街口外大街19号</td>
        </tr>
        <tr>
          <td>小教教育</td>
          <td>余同学</td>
          <td>北京师范大学</td>
          <td>西南地区</td>
          <td>北京</td>
          <td></td>
          <td>硕士研究生</td>
          <td>升学</td>
          <td>北京市海淀区新街口外大街19号</td>
        </tr>
        <tr>
          <td>小教教育</td>
          <td>钟同学</td>
          <td>华中师范大学</td>
          <td>西南地区</td>
          <td>武汉</td>
          <td></td>
          <td>硕士研究生</td>
          <td>升学</td>
          <td>武汉市珞喻路152号(近卓刀泉南路)</td>
        </tr>
        <tr>
          <td>小教教育</td>
          <td>张同学</td>
          <td>东北师范大学</td>
          <td>华东地区</td>
          <td>吉林</td>
          <td></td>
          <td>硕士研究生</td>
          <td>升学</td>
          <td>长春市人民大街5268号</td>
        </tr>
        <tr>
          <td>小教教育</td>
          <td>郗同学</td>
          <td>东北师范大学</td>
          <td>华北地区</td>
          <td>吉林</td>
          <td></td>
          <td>硕士研究生</td>
          <td>升学</td>
          <td>长春市人民大街5268号</td>
        </tr>
        <tr>
          <td>小教教育</td>
          <td>郭同学</td>
          <td>东北师范大学</td>
          <td>华北地区</td>
          <td>吉林</td>
          <td></td>
          <td>硕士研究生</td>
          <td>升学</td>
          <td>长春市人民大街5268号</td>
        </tr>
        <tr>
          <td>小教教育</td>
          <td>张同学</td>
          <td>南京师范大学</td>
          <td>西南地区</td>
          <td>江苏</td>
          <td></td>
          <td>硕士研究生</td>
          <td>升学</td>
          <td>江苏省南京市近郊栖霞区文苑路1号</td>
        </tr>
        <tr>
          <td>小教教育</td>
          <td>徐同学</td>
          <td>东北师范大学</td>
          <td>东北地区</td>
          <td>吉林</td>
          <td></td>
          <td>硕士研究生</td>
          <td>升学</td>
          <td>长春市人民大街5268号</td>
        </tr>
        <tr>
          <td>小教教育</td>
          <td>刘同学</td>
          <td>东北师范大学</td>
          <td>东北地区</td>
          <td>吉林</td>
          <td></td>
          <td>硕士研究生</td>
          <td>升学</td>
          <td>长春市人民大街5268号</td>
        </tr>
        <tr>
          <td>小教教育</td>
          <td>宋同学</td>
          <td>东北师范大学</td>
          <td>华东地区</td>
          <td>吉林</td>
          <td></td>
          <td>硕士研究生</td>
          <td>升学</td>
          <td>长春市人民大街5268号</td>
        </tr>
        <tr>
          <td>小教教育</td>
          <td>时同学</td>
          <td>陕西师范大学</td>
          <td>华东地区</td>
          <td>陕西</td>
          <td></td>
          <td>硕士研究生</td>
          <td>升学</td>
          <td>陕西省西安市长安区西长安街620号</td>
        </tr>
        <tr>
          <td>小教教育</td>
          <td>丁同学</td>
          <td>东北师范大学</td>
          <td>华东地区</td>
          <td>吉林</td>
          <td></td>
          <td>硕士研究生</td>
          <td>升学</td>
          <td>长春市人民大街5268号</td>
        </tr>
      </table>
    </div>

    <div id="table2017" v-show="this.year==2017">
      <table border="1" class="table-total">
        <tr>
          <td>项目</td>
          <td>人数</td>
          <td>占比</td>
        </tr>
        <tr>
          <td>就业</td>
          <td>45</td>
          <td>50%</td>
        </tr>
        <tr>
          <td>升学</td>
          <td>45</td>
          <td>50%</td>
        </tr>
      </table>
      <table border="1">
        <tr>
          <td>姓名</td>
          <td>专业</td>
          <td>就业地点/升学情况</td>
          <td>接收单位</td>
        </tr>
        <tr>
          <td>薛同学</td>
          <td>公共事业管理</td>
          <td>保送1+3研究生</td>
          <td>东北师范大学</td>
        </tr>
        <tr>
          <td>殷同学</td>
          <td>公共事业管理</td>
          <td>保送研究生</td>
          <td>中国人民大学</td>
        </tr>
        <tr>
          <td>冯同学</td>
          <td>公共事业管理</td>
          <td>保送研究生</td>
          <td>北京师范大学</td>
        </tr>
        <tr>
          <td>仁同学</td>
          <td>公共事业管理</td>
          <td>出国（美国）</td>
          <td>未定</td>
        </tr>
        <tr>
          <td>刘同学</td>
          <td>公共事业管理</td>
          <td>考研</td>
          <td>东北师范大学</td>
        </tr>
        <tr>
          <td>杨同学</td>
          <td>公共事业管理</td>
          <td>考研</td>
          <td>东北师范大学</td>
        </tr>
        <tr>
          <td>金同学</td>
          <td>公共事业管理</td>
          <td>考研</td>
          <td>东北师范大学</td>
        </tr>
        <tr>
          <td>周同学</td>
          <td>公共事业管理</td>
          <td>考研</td>
          <td>东北师范大学</td>
        </tr>
        <tr>
          <td>张同学</td>
          <td>公共事业管理</td>
          <td>考研</td>
          <td>东北师范大学</td>
        </tr>
        <tr>
          <td>郑同学</td>
          <td>公共事业管理</td>
          <td>考研</td>
          <td>陕西师范大学</td>
        </tr>
        <tr>
          <td>刘同学</td>
          <td>公共事业管理</td>
          <td>吉林省长春市</td>
          <td>长春市南关区永长小学</td>
        </tr>
        <tr>
          <td>王同学</td>
          <td>公共事业管理</td>
          <td>江苏省盐城市</td>
          <td>江苏省响水双语</td>
        </tr>
        <tr>
          <td>李同学</td>
          <td>公共事业管理</td>
          <td>浙江省杭州市</td>
          <td>杭州新东方进修学校</td>
        </tr>
        <tr>
          <td>张同学</td>
          <td>公共事业管理</td>
          <td>重庆市合川区</td>
          <td>重庆北新北蜀中学</td>
        </tr>
        <tr>
          <td>杨同学</td>
          <td>教育学</td>
          <td>保送1+3研究生</td>
          <td>东北师范大学</td>
        </tr>
        <tr>
          <td>郭同学</td>
          <td>教育学</td>
          <td>保送研究生</td>
          <td>北京师范大学</td>
        </tr>
        <tr>
          <td>林同学</td>
          <td>教育学</td>
          <td>保送研究生</td>
          <td>厦门大学</td>
        </tr>
        <tr>
          <td>张同学</td>
          <td>教育学</td>
          <td>保送研究生</td>
          <td>华东师范大学</td>
        </tr>
        <tr>
          <td>吴同学</td>
          <td>教育学</td>
          <td>保送研究生</td>
          <td>华中师范大学</td>
        </tr>
        <tr>
          <td>阴同学</td>
          <td>教育学</td>
          <td>保送研究生</td>
          <td>北京师范大学</td>
        </tr>
        <tr>
          <td>朴同学</td>
          <td>教育学</td>
          <td>出国（韩国）</td>
          <td>未定</td>
        </tr>
        <tr>
          <td>曹同学</td>
          <td>教育学</td>
          <td>出国（韩国）</td>
          <td>未定</td>
        </tr>
        <tr>
          <td>孙同学</td>
          <td>教育学</td>
          <td>出国（英国）</td>
          <td>曼彻斯特大学</td>
        </tr>
        <tr>
          <td>王同学</td>
          <td>教育学</td>
          <td>出国（英国）</td>
          <td>伦敦大学学院</td>
        </tr>
        <tr>
          <td>王同学</td>
          <td>教育学</td>
          <td>考研</td>
          <td>华东师范大学</td>
        </tr>
        <tr>
          <td>聂同学</td>
          <td>教育学</td>
          <td>考研</td>
          <td>北京师范大学</td>
        </tr>
        <tr>
          <td>王同学</td>
          <td>教育学</td>
          <td>考研</td>
          <td>山东大学</td>
        </tr>
        <tr>
          <td>王同学</td>
          <td>教育学</td>
          <td>考研</td>
          <td>兰州大学</td>
        </tr>
        <tr>
          <td>尚同学</td>
          <td>教育学</td>
          <td>考研</td>
          <td>东北师范大学</td>
        </tr>
        <tr>
          <td>陈同学</td>
          <td>教育学</td>
          <td>考研</td>
          <td>东北师范大学</td>
        </tr>
        <tr>
          <td>田同学</td>
          <td>教育学</td>
          <td>考研</td>
          <td>东北师范大学</td>
        </tr>
        <tr>
          <td>姜同学</td>
          <td>教育学</td>
          <td>考研</td>
          <td>东北师范大学</td>
        </tr>
        <tr>
          <td>苏同学</td>
          <td>教育学</td>
          <td>考研</td>
          <td>东北师范大学</td>
        </tr>
        <tr>
          <td>隋同学</td>
          <td>教育学</td>
          <td>考研</td>
          <td>东北师范大学</td>
        </tr>
        <tr>
          <td>张同学</td>
          <td>小学教育（非师）</td>
          <td>保送1+3研究生</td>
          <td>东北师范大学</td>
        </tr>
        <tr>
          <td>宋同学</td>
          <td>小学教育（非师）</td>
          <td>保送研究生</td>
          <td>东北师范大学</td>
        </tr>
        <tr>
          <td>郭同学</td>
          <td>小学教育（非师）</td>
          <td>保送研究生</td>
          <td>东北师范大学</td>
        </tr>
        <tr>
          <td>王同学</td>
          <td>小学教育（非师）</td>
          <td>保送支教团研究生</td>
          <td>东北师范大学</td>
        </tr>
        <tr>
          <td>薛同学</td>
          <td>小学教育（非师）</td>
          <td>福建省厦门市</td>
          <td>厦门五缘第二实验学校</td>
        </tr>
        <tr>
          <td>叶同学</td>
          <td>小学教育（非师）</td>
          <td>福建省厦门市</td>
          <td>厦门五缘第二实验学校</td>
        </tr>
        <tr>
          <td>汪同学</td>
          <td>小学教育（非师）</td>
          <td>广东省深圳市</td>
          <td>东北师大益田附小</td>
        </tr>
        <tr>
          <td>郭同学</td>
          <td>小学教育（非师）</td>
          <td>吉林省长春市</td>
          <td>长春吉大附中力旺实验小学</td>
        </tr>
        <tr>
          <td>丁同学</td>
          <td>小学教育（非师）</td>
          <td>辽宁省沈阳市</td>
          <td>北师大沈阳附属</td>
        </tr>
        <tr>
          <td>岳同学</td>
          <td>小学教育（非师）</td>
          <td>辽宁省沈阳市</td>
          <td>沈阳市和平一小</td>
        </tr>
        <tr>
          <td>袁同学</td>
          <td>小学教育（非师）</td>
          <td>辽宁省沈阳市</td>
          <td>沈阳市和平一小</td>
        </tr>
        <tr>
          <td>杨同学</td>
          <td>小学教育（非师）</td>
          <td>浙江省龙游县</td>
          <td>浙江龙游教育局</td>
        </tr>
        <tr>
          <td>田同学</td>
          <td>小学教育（非师）</td>
          <td>浙江省龙游县</td>
          <td>浙江龙游教育局</td>
        </tr>
        <tr>
          <td>彭同学</td>
          <td>小学教育（非师）</td>
          <td>重庆市</td>
          <td>北师大南川附属学校</td>
        </tr>
        <tr>
          <td>陈同学</td>
          <td>小学教育（免师）</td>
          <td>福建省厦门市</td>
          <td>厦门五缘实验学校</td>
        </tr>
        <tr>
          <td>邵同学</td>
          <td>小学教育（免师）</td>
          <td>福建省厦门市</td>
          <td>厦门五缘第二实验学校</td>
        </tr>
        <tr>
          <td>曹同学</td>
          <td>小学教育（免师）</td>
          <td>福建省厦门市</td>
          <td>厦门五缘第二实验学校</td>
        </tr>
        <tr>
          <td>马同学</td>
          <td>小学教育（免师）</td>
          <td>甘肃省酒泉市肃州区</td>
          <td>甘肃省酒泉市肃州区东苑学校</td>
        </tr>
        <tr>
          <td>扈同学</td>
          <td>小学教育（免师）</td>
          <td>河北省保定市</td>
          <td>保定市乐凯中学</td>
        </tr>
        <tr>
          <td>武同学</td>
          <td>小学教育（免师）</td>
          <td>湖北省武汉市</td>
          <td>武汉光谷一小</td>
        </tr>
        <tr>
          <td>梁同学</td>
          <td>小学教育（免师）</td>
          <td>吉林省白城市</td>
          <td>白城市第四中学</td>
        </tr>
        <tr>
          <td>林同学</td>
          <td>小学教育（免师）</td>
          <td>吉林省延吉市</td>
          <td>延吉市中央小学</td>
        </tr>
        <tr>
          <td>高同学</td>
          <td>小学教育（免师）</td>
          <td>辽宁省沈阳市</td>
          <td>沈阳市望湖路小学</td>
        </tr>
        <tr>
          <td>杨同学</td>
          <td>小学教育（免师）</td>
          <td>陕西省安康市</td>
          <td>安康市汉滨区培新小学</td>
        </tr>
        <tr>
          <td>彭同学</td>
          <td>小学教育（免师）</td>
          <td>陕西省汉中市</td>
          <td>南郑县城关小学</td>
        </tr>
        <tr>
          <td>贾同学</td>
          <td>小学教育（免师）</td>
          <td>陕西省西安市</td>
          <td>西安市灞桥区教育局</td>
        </tr>
        <tr>
          <td>莫同学</td>
          <td>小学教育（免师）</td>
          <td>新疆省博乐市</td>
          <td>博乐市第五小学</td>
        </tr>
        <tr>
          <td>努同学</td>
          <td>小学教育（免师）</td>
          <td>新疆省和田市</td>
          <td>洛浦县英兰格学校</td>
        </tr>
        <tr>
          <td>古同学</td>
          <td>小学教育（免师）</td>
          <td>新疆省和田市</td>
          <td>洛浦县英兰格学校</td>
        </tr>
        <tr>
          <td>月同学</td>
          <td>小学教育（免师）</td>
          <td>新疆省于田县</td>
          <td>新疆省于田县二高</td>
        </tr>
        <tr>
          <td>赵同学</td>
          <td>小学教育（免师）</td>
          <td>新疆乌鲁木齐</td>
          <td>乌鲁木齐市第127中学</td>
        </tr>
        <tr>
          <td>曹同学</td>
          <td>小学教育（免师）</td>
          <td>浙江省杭州市</td>
          <td>杭州市保俶塔实验学校</td>
        </tr>
        <tr>
          <td>王同学</td>
          <td>学前教育</td>
          <td>保送1+3研究生</td>
          <td>东北师范大学</td>
        </tr>
        <tr>
          <td>张同学</td>
          <td>学前教育</td>
          <td>保送研究生</td>
          <td>东北师范大学</td>
        </tr>
        <tr>
          <td>朱同学</td>
          <td>学前教育</td>
          <td>保送研究生</td>
          <td>华东师范大学</td>
        </tr>
        <tr>
          <td>王同学</td>
          <td>学前教育</td>
          <td>保送研究生</td>
          <td>北京师范大学</td>
        </tr>
        <tr>
          <td>尹同学</td>
          <td>学前教育</td>
          <td>保送研究生</td>
          <td>东北师范大学</td>
        </tr>
        <tr>
          <td>张同学</td>
          <td>学前教育</td>
          <td>保送研究生</td>
          <td>东北师范大学</td>
        </tr>
        <tr>
          <td>徐同学</td>
          <td>学前教育</td>
          <td>考研</td>
          <td>东北师范大学</td>
        </tr>
        <tr>
          <td>薛同学</td>
          <td>学前教育</td>
          <td>考研</td>
          <td>东北师范大学</td>
        </tr>
        <tr>
          <td>陈同学</td>
          <td>学前教育</td>
          <td>考研</td>
          <td>东北师范大学</td>
        </tr>
        <tr>
          <td>刘同学</td>
          <td>学前教育</td>
          <td>考研</td>
          <td>东北师范大学</td>
        </tr>
        <tr>
          <td>陶同学</td>
          <td>学前教育</td>
          <td>考研</td>
          <td>东北师范大学</td>
        </tr>
        <tr>
          <td>富同学</td>
          <td>学前教育</td>
          <td>广东省深圳市</td>
          <td>深圳元平特殊教育学校</td>
        </tr>
        <tr>
          <td>申同学</td>
          <td>学前教育</td>
          <td>上海市嘉定区</td>
          <td>上海市留云幼儿园</td>
        </tr>
        <tr>
          <td>李同学</td>
          <td>学前教育</td>
          <td>广东省东莞市</td>
          <td>东莞市东北师大益田小学</td>
        </tr>
        <tr>
          <td>温同学</td>
          <td>学前教育</td>
          <td>广东省深圳市</td>
          <td>深圳元平特校</td>
        </tr>
        <tr>
          <td>王同学</td>
          <td>学前教育</td>
          <td>吉林省长春市</td>
          <td>长春市南关区第二幼儿园</td>
        </tr>
        <tr>
          <td>潘同学</td>
          <td>学前教育</td>
          <td>辽宁省大连市</td>
          <td>大连市沙河口区教育局</td>
        </tr>
        <tr>
          <td>路同学</td>
          <td>学前教育</td>
          <td>辽宁省大连市</td>
          <td>大连市沙河口区教育局</td>
        </tr>
        <tr>
          <td>王同学</td>
          <td>学前教育</td>
          <td>辽宁省大连市</td>
          <td>大连市沙河口区教育局</td>
        </tr>
        <tr>
          <td>李同学</td>
          <td>学前教育</td>
          <td>辽宁省沈阳市</td>
          <td>沈阳市外事服务中心</td>
        </tr>
        <tr>
          <td>李同学</td>
          <td>学前教育</td>
          <td>辽宁省沈阳市</td>
          <td>沈阳市外事服务学校</td>
        </tr>
        <tr>
          <td>孙同学</td>
          <td>学前教育</td>
          <td>辽宁省沈阳市</td>
          <td>沈阳市旅游学校</td>
        </tr>
        <tr>
          <td>隋同学</td>
          <td>学前教育</td>
          <td>辽宁省沈阳市</td>
          <td>沈阳市旅游学校</td>
        </tr>
        <tr>
          <td>孙同学</td>
          <td>学前教育</td>
          <td>浙江省杭州市</td>
          <td>杭州市滨江区幼儿园</td>
        </tr>
      </table>
    </div>

    <div id="table2016" v-show="this.year==2016">
      <table border="1" class="table-total">
        <tr>
          <td>项目</td>
          <td>人数</td>
          <td>占比</td>
        </tr>
        <tr>
          <td>就业</td>
          <td>33</td>
          <td>27.7%</td>
        </tr>
        <tr>
          <td>升学</td>
          <td>86</td>
          <td>72.3%</td>
        </tr>
      </table>
      <table border="1">
        <tr>
          <td>姓名</td>
          <td>性别</td>
          <td>院校名称</td>
          <td>专业名称</td>
          <td>毕业去向</td>
          <td>单位名称</td>
          <td>单位所在地</td>
        </tr>
        <tr>
          <td>李同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>公共事业(教育)管理</td>
          <td>出国、出境</td>
          <td>英国</td>
          <td></td>
        </tr>
        <tr>
          <td>邓同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>公共事业(教育)管理</td>
          <td>签就业协议形式就业</td>
          <td>罗定喜耀粤西学校</td>
          <td>广东省罗定市</td>
        </tr>
        <tr>
          <td>阮同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>公共事业(教育)管理</td>
          <td>签就业协议形式就业</td>
          <td>深圳市南山区教育局</td>
          <td>广东省深圳市南山区</td>
        </tr>
        <tr>
          <td>易同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>公共事业(教育)管理</td>
          <td>签就业协议形式就业</td>
          <td>六盘水外国语实验学校</td>
          <td>贵州省六盘水市</td>
        </tr>
        <tr>
          <td>马同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>公共事业(教育)管理</td>
          <td>签就业协议形式就业</td>
          <td>唐山金桥道尔顿文化传播有限公司</td>
          <td>河北省唐山市</td>
        </tr>
        <tr>
          <td>王同学</td>
          <td>男</td>
          <td>东北师范大学</td>
          <td>公共事业(教育)管理</td>
          <td>签就业协议形式就业</td>
          <td>沂水县教育体育局</td>
          <td>山东省沂水县</td>
        </tr>
        <tr>
          <td>蒋同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>公共事业(教育)管理</td>
          <td>签就业协议形式就业</td>
          <td>双流县人才交流中心教育分中心</td>
          <td>四川省双流县</td>
        </tr>
        <tr>
          <td>张同学</td>
          <td>男</td>
          <td>东北师范大学</td>
          <td>公共事业(教育)管理</td>
          <td>签就业协议形式就业</td>
          <td>双流县人才交流中心教育分中心</td>
          <td>四川省双流县</td>
        </tr>
        <tr>
          <td>喇同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>公共事业(教育)管理</td>
          <td>签就业协议形式就业</td>
          <td>平阳新纪元学校</td>
          <td>浙江省平阳县</td>
        </tr>
        <tr>
          <td>喻同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>公共事业(教育)管理</td>
          <td>升学</td>
          <td>华东师范大学</td>
          <td></td>
        </tr>
        <tr>
          <td>董同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>公共事业(教育)管理</td>
          <td>升学</td>
          <td>东北师范大学</td>
          <td></td>
        </tr>
        <tr>
          <td>袁同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>公共事业(教育)管理</td>
          <td>升学</td>
          <td>华东师范大学</td>
          <td></td>
        </tr>
        <tr>
          <td>王同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>公共事业(教育)管理</td>
          <td>升学</td>
          <td>华东师范大学</td>
          <td></td>
        </tr>
        <tr>
          <td>徐同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>公共事业(教育)管理</td>
          <td>升学</td>
          <td>东北师范大学</td>
          <td></td>
        </tr>
        <tr>
          <td>郭同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>公共事业(教育)管理</td>
          <td>自由职业</td>
          <td>河北省邢台市隆尧县国税局职员</td>
          <td>河北省隆尧县</td>
        </tr>
        <tr>
          <td>丁同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>公共事业(教育)管理</td>
          <td>自由职业</td>
          <td>南京图书馆 图书管理</td>
          <td>江苏省南京市玄武区</td>
        </tr>
        <tr>
          <td>王同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>公共事业(教育)管理</td>
          <td>自主创业</td>
          <td>小博士辅导班</td>
          <td>吉林省吉林市</td>
        </tr>
        <tr>
          <td>张同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>公共事业(教育)管理</td>
          <td>自主创业</td>
          <td>山东省青岛市选调村官</td>
          <td>山东省即墨市</td>
        </tr>
        <tr>
          <td>申同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>教育学</td>
          <td>不就业拟升学</td>
          <td>拟升学</td>
          <td></td>
        </tr>
        <tr>
          <td>张同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>教育学</td>
          <td>出国、出境</td>
          <td>英国</td>
          <td></td>
        </tr>
        <tr>
          <td>冶同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>教育学</td>
          <td>其他录用形式就业</td>
          <td>青海省海东市华隆县小学</td>
          <td>青海省海东市</td>
        </tr>
        <tr>
          <td>陈同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>教育学</td>
          <td>签就业协议形式就业</td>
          <td>东莞市宏远外国语学校</td>
          <td>广东省东莞市</td>
        </tr>
        <tr>
          <td>常同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>教育学</td>
          <td>签就业协议形式就业</td>
          <td>东莞市宏远外国语学校</td>
          <td>广东省东莞市</td>
        </tr>
        <tr>
          <td>刘同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>教育学</td>
          <td>签就业协议形式就业</td>
          <td>鄂尔多斯市康巴什新区教育体育局</td>
          <td>内蒙古鄂尔多斯市</td>
        </tr>
        <tr>
          <td>王同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>教育学</td>
          <td>升学</td>
          <td>东北师范大学</td>
          <td></td>
        </tr>
        <tr>
          <td>欧同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>教育学</td>
          <td>升学</td>
          <td>华东师范大学</td>
          <td></td>
        </tr>
        <tr>
          <td>张同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>教育学</td>
          <td>升学</td>
          <td>东北师范大学</td>
          <td></td>
        </tr>
        <tr>
          <td>司同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>教育学</td>
          <td>升学</td>
          <td>东北师范大学</td>
          <td></td>
        </tr>
        <tr>
          <td>徐同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>教育学</td>
          <td>升学</td>
          <td>西南大学</td>
          <td></td>
        </tr>
        <tr>
          <td>姚同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>教育学</td>
          <td>升学</td>
          <td>华东师范大学</td>
          <td></td>
        </tr>
        <tr>
          <td>郑同学</td>
          <td>男</td>
          <td>东北师范大学</td>
          <td>教育学</td>
          <td>升学</td>
          <td>北京大学</td>
          <td></td>
        </tr>
        <tr>
          <td>王同学</td>
          <td>男</td>
          <td>东北师范大学</td>
          <td>教育学</td>
          <td>升学</td>
          <td>东北师范大学</td>
          <td></td>
        </tr>
        <tr>
          <td>郝同学</td>
          <td>男</td>
          <td>东北师范大学</td>
          <td>教育学</td>
          <td>升学</td>
          <td>华东师范大学</td>
          <td></td>
        </tr>
        <tr>
          <td>张同学</td>
          <td>男</td>
          <td>东北师范大学</td>
          <td>教育学</td>
          <td>升学</td>
          <td>东北师范大学</td>
          <td></td>
        </tr>
        <tr>
          <td>赵同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>教育学</td>
          <td>自由职业</td>
          <td>福建省飞毛腿工业技术学校</td>
          <td>福建省福州市</td>
        </tr>
        <tr>
          <td>李同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>教育学</td>
          <td>自由职业</td>
          <td>新东方教育辅导班</td>
          <td>河北省沧州市</td>
        </tr>
        <tr>
          <td>杨同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>教育学</td>
          <td>自由职业</td>
          <td>新东方教育辅导班</td>
          <td>吉林省长春市</td>
        </tr>
        <tr>
          <td>袁同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>教育学</td>
          <td>自由职业</td>
          <td>扬州市开发县</td>
          <td>江苏省扬州市</td>
        </tr>
        <tr>
          <td>徐同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>出国、出境</td>
          <td>美国</td>
          <td></td>
        </tr>
        <tr>
          <td>李同学</td>
          <td>男</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>待就业</td>
          <td>求职中</td>
          <td></td>
        </tr>
        <tr>
          <td>应同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>合肥市南门小学</td>
          <td>安徽省合肥市</td>
        </tr>
        <tr>
          <td>吴同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>合肥市西园新村小学</td>
          <td>安徽省合肥市</td>
        </tr>
        <tr>
          <td>范同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>合肥市南门小学</td>
          <td>安徽省合肥市庐阳区</td>
        </tr>
        <tr>
          <td>邰同学</td>
          <td>男</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>合肥市南门小学</td>
          <td>安徽省合肥市庐阳区</td>
        </tr>
        <tr>
          <td>杨同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>宁国市实验小学</td>
          <td>安徽省宁国市</td>
        </tr>
        <tr>
          <td>蔡同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>厦门五缘第二实验学校</td>
          <td>福建省厦门市</td>
        </tr>
        <tr>
          <td>徐同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>厦门市同安区教育局</td>
          <td>福建省厦门市</td>
        </tr>
        <tr>
          <td>张同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>东莞市凤岗东北师大附属益田小学</td>
          <td>广东省东莞市</td>
        </tr>
        <tr>
          <td>卫同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>石家庄市裕华区教育局</td>
          <td>河北省石家庄市</td>
        </tr>
        <tr>
          <td>葛同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>河北省教育厅</td>
          <td>河北省石家庄市</td>
        </tr>
        <tr>
          <td>张同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>石家庄市裕华区教育局</td>
          <td>河北省石家庄市</td>
        </tr>
        <tr>
          <td>李同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>洛阳市实验小学</td>
          <td>河南省洛阳市</td>
        </tr>
        <tr>
          <td>成同学</td>
          <td>男</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>浏阳市集里街道集里初级中学</td>
          <td>湖南省浏阳市</td>
        </tr>
        <tr>
          <td>向同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>长沙麓山国际实验小学</td>
          <td>湖南省长沙市</td>
        </tr>
        <tr>
          <td>蒋同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>长沙市长郡雨花外国语学校</td>
          <td>湖南省长沙市</td>
        </tr>
        <tr>
          <td>李同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>长沙市雨花区砂子塘小学</td>
          <td>湖南省长沙市</td>
        </tr>
        <tr>
          <td>罗同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>长沙市雨花区砂子塘小学</td>
          <td>湖南省长沙市雨花区</td>
        </tr>
        <tr>
          <td>扶同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>长沙市雨花区砂子塘小学</td>
          <td>湖南省长沙市雨花区</td>
        </tr>
        <tr>
          <td>张同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>长沙市雨花区教育局</td>
          <td>湖南省长沙市雨花区</td>
        </tr>
        <tr>
          <td>邹同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>长沙市雨花区教育局</td>
          <td>湖南省长沙市雨花区</td>
        </tr>
        <tr>
          <td>彭同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>长沙市雨花区砂子塘小学</td>
          <td>湖南省长沙市雨花区</td>
        </tr>
        <tr>
          <td>王同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>松原市油区教育处</td>
          <td>吉林省松原市</td>
        </tr>
        <tr>
          <td>徐同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>长春市朝阳区解放大路小学</td>
          <td>吉林省长春市</td>
        </tr>
        <tr>
          <td>李同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>沈阳市浑南区第五小学</td>
          <td>辽宁省沈阳市</td>
        </tr>
        <tr>
          <td>刘同学</td>
          <td>男</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>沈阳市铁西区勋望小学</td>
          <td>辽宁省沈阳市</td>
        </tr>
        <tr>
          <td>马同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>沈阳市大东区杏坛小学</td>
          <td>辽宁省沈阳市大东区</td>
        </tr>
        <tr>
          <td>隋同学</td>
          <td>男</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>沈阳市铁西区勋望小学</td>
          <td>辽宁省沈阳市铁西区</td>
        </tr>
        <tr>
          <td>宋同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>沈阳市铁西区勋望小学</td>
          <td>辽宁省沈阳市铁西区</td>
        </tr>
        <tr>
          <td>王同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>包头市青山区教育局</td>
          <td>内蒙古包头市</td>
        </tr>
        <tr>
          <td>王同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>内蒙古包头市青山区教育局</td>
          <td>内蒙古包头市</td>
        </tr>
        <tr>
          <td>李同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>包头市青山区教育局</td>
          <td>内蒙古包头市</td>
        </tr>
        <tr>
          <td>秦同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>呼和浩特市回民区贝尔路小学</td>
          <td>内蒙古呼和浩特市</td>
        </tr>
        <tr>
          <td>岳同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>内蒙古教育厅高校毕业生就业指导中心</td>
          <td>内蒙古呼和浩特市</td>
        </tr>
        <tr>
          <td>姜同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>西宁市城东区教育局</td>
          <td>青海省西宁市城东区</td>
        </tr>
        <tr>
          <td>何同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>西宁市城中区教育局</td>
          <td>青海省西宁市城中区</td>
        </tr>
        <tr>
          <td>林同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>临沂国际学校</td>
          <td>山东省临沂市</td>
        </tr>
        <tr>
          <td>侯同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>青岛实验学校</td>
          <td>山东省青岛市</td>
        </tr>
        <tr>
          <td>王同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>烟台经济技术开发区教育体育局</td>
          <td>山东省烟台市</td>
        </tr>
        <tr>
          <td>王同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>山西农业大学</td>
          <td>山西省晋中市</td>
        </tr>
        <tr>
          <td>陈同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>西藏教育厅</td>
          <td>西藏拉萨市</td>
        </tr>
        <tr>
          <td>仁同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>西藏教育厅</td>
          <td>西藏拉萨市</td>
        </tr>
        <tr>
          <td>沙同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>博乐市第七中学</td>
          <td>新疆博乐市</td>
        </tr>
        <tr>
          <td>赛同学</td>
          <td>男</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>富蕴县恰库尔图牧业寄宿制中小学</td>
          <td>新疆富蕴县</td>
        </tr>
        <tr>
          <td>依同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>伽师县巴仁镇第一小学</td>
          <td>新疆伽师县</td>
        </tr>
        <tr>
          <td>阿同学</td>
          <td>男</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>新疆鄯善县教育局</td>
          <td>新疆鄯善县</td>
        </tr>
        <tr>
          <td>方同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>新疆乌鲁木齐市第八十小学</td>
          <td>新疆乌鲁木齐市新市区</td>
        </tr>
        <tr>
          <td>齐同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>岳普湖县巴依阿瓦提中心小学</td>
          <td>新疆岳普湖县</td>
        </tr>
        <tr>
          <td>秦同学</td>
          <td>男</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>昆明市官渡区诚明小学</td>
          <td>云南省昆明市官渡区</td>
        </tr>
        <tr>
          <td>玉同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>签就业协议形式就业</td>
          <td>东北师范大学南湖实验教育集团</td>
          <td>浙江省嘉兴市</td>
        </tr>
        <tr>
          <td>夏同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>升学</td>
          <td>东北师范大学</td>
          <td></td>
        </tr>
        <tr>
          <td>鞠同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>升学</td>
          <td>北京师范大学</td>
          <td></td>
        </tr>
        <tr>
          <td>王同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>升学</td>
          <td>北京师范大学</td>
          <td></td>
        </tr>
        <tr>
          <td>刘同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>自由职业</td>
          <td>时代文化宫</td>
          <td>河南省商丘市</td>
        </tr>
        <tr>
          <td>赵同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>自由职业</td>
          <td>向阳辅导机构</td>
          <td>辽宁省营口市站前区</td>
        </tr>
        <tr>
          <td>商同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>小学教育</td>
          <td>自由职业</td>
          <td>山东省巨野县海阳教育中心</td>
          <td>山东省巨野县</td>
        </tr>
        <tr>
          <td>曲同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>学前教育</td>
          <td>不就业拟升学</td>
          <td>拟升学</td>
          <td></td>
        </tr>
        <tr>
          <td>王同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>学前教育</td>
          <td>不就业拟升学</td>
          <td>拟升学</td>
          <td></td>
        </tr>
        <tr>
          <td>赵同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>学前教育</td>
          <td>不就业拟升学</td>
          <td>拟升学</td>
          <td></td>
        </tr>
        <tr>
          <td>赵同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>学前教育</td>
          <td>出国、出境</td>
          <td>澳大利亚</td>
          <td></td>
        </tr>
        <tr>
          <td>赵同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>学前教育</td>
          <td>待就业</td>
          <td>求职中</td>
          <td></td>
        </tr>
        <tr>
          <td>李同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>学前教育</td>
          <td>待就业</td>
          <td>签约中</td>
          <td></td>
        </tr>
        <tr>
          <td>戴同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>学前教育</td>
          <td>待就业</td>
          <td>求职中</td>
          <td></td>
        </tr>
        <tr>
          <td>李同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>学前教育</td>
          <td>待就业</td>
          <td>求职中</td>
          <td></td>
        </tr>
        <tr>
          <td>李同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>学前教育</td>
          <td>待就业</td>
          <td>求职中</td>
          <td></td>
        </tr>
        <tr>
          <td>田同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>学前教育</td>
          <td>待就业</td>
          <td>求职中</td>
          <td></td>
        </tr>
        <tr>
          <td>王同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>学前教育</td>
          <td>待就业</td>
          <td>求职中</td>
          <td></td>
        </tr>
        <tr>
          <td>于同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>学前教育</td>
          <td>待就业</td>
          <td>求职中</td>
          <td></td>
        </tr>
        <tr>
          <td>李同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>学前教育</td>
          <td>签就业协议形式就业</td>
          <td>大连市西岗区教育局</td>
          <td>辽宁省大连市</td>
        </tr>
        <tr>
          <td>李同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>学前教育</td>
          <td>签就业协议形式就业</td>
          <td>大连市沙河口区教育局</td>
          <td>辽宁省大连市</td>
        </tr>
        <tr>
          <td>李同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>学前教育</td>
          <td>签就业协议形式就业</td>
          <td>大连市沙河口区教育局</td>
          <td>辽宁省大连市沙河口区</td>
        </tr>
        <tr>
          <td>王同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>学前教育</td>
          <td>签就业协议形式就业</td>
          <td>大连市西岗区教育局</td>
          <td>辽宁省大连市西岗区</td>
        </tr>
        <tr>
          <td>吴同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>学前教育</td>
          <td>升学</td>
          <td>东北师范大学</td>
          <td></td>
        </tr>
        <tr>
          <td>刘同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>学前教育</td>
          <td>升学</td>
          <td>东北师范大学</td>
          <td></td>
        </tr>
        <tr>
          <td>孙同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>学前教育</td>
          <td>升学</td>
          <td>首都师范大学</td>
          <td></td>
        </tr>
        <tr>
          <td>任同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>学前教育</td>
          <td>升学</td>
          <td>东北师范大学</td>
          <td></td>
        </tr>
        <tr>
          <td>马同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>学前教育</td>
          <td>升学</td>
          <td>上海师范大学</td>
          <td></td>
        </tr>
        <tr>
          <td>徐同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>学前教育</td>
          <td>升学</td>
          <td>东北师范大学</td>
          <td></td>
        </tr>
        <tr>
          <td>单同学</td>
          <td>女</td>
          <td>东北师范大学</td>
          <td>学前教育</td>
          <td>升学</td>
          <td>东北师范大学</td>
          <td></td>
        </tr>
        <tr>
          <td>王同学</td>
          <td>男</td>
          <td>东北师范大学</td>
          <td>学前教育</td>
          <td>自主创业</td>
          <td>教育信息咨询有限公司</td>
          <td>吉林省长春市</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";

export default {
  name: "Charts",
  data() {
    return {
      year: 2018,
      data2018: {
        year: 2018,
        text: '2018届毕业生毕业去向汇总',
        xiaojiao: 41,
        xj_shengxue: 8,
        xj_jiuye: 33,
        jiaoguan: 14,
        jg_shengxue: 9,
        jg_jiuye: 5,
        jiaoyu: 18,
        jy_shengxue: 11,
        jy_jiuye: 7,
        xueqian: 30,
        xq_shengxue: 15,
        xq_jiuye: 15
      },
      data2017: {
        year: 2017,
        text: '2017届毕业生毕业去向汇总',
        xiaojiao: 32,
        xj_shengxue: 4,
        xj_jiuye: 28,
        jiaoguan: 14,
        jg_shengxue: 10,
        jg_jiuye: 4,
        jiaoyu: 20,
        jy_shengxue: 20,
        jy_jiuye: 0,
        xueqian: 24,
        xq_shengxue: 11,
        xq_jiuye: 13
      },
      data2016: {
        year: 2016,
        text: '2016届毕业生毕业去向汇总',
        xiaojiao: 57,
        xj_shengxue: 4,
        xj_jiuye: 53,
        jiaoguan: 18,
        jg_shengxue: 6,
        jg_jiuye: 12,
        jiaoyu: 20,
        jy_shengxue: 12,
        jy_jiuye: 8,
        xueqian: 24,
        xq_shengxue: 11,
        xq_jiuye: 13
      },
    }
  },
  methods: {
    initCharts(mydata = this.data2018) {
      document.body.clientWidth > 700 ? mydata.radius = "60%" : mydata.radius = "15%";
      this.year = mydata.year;
      var myChart = echarts.init(document.getElementById('chartmain'));
      myChart.setOption(
        {
          title: {
            text: mydata.text,
            subtext: '仅供参考，请勿外传',
            left: 'center',
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            // orient: 'vertical',
            // top: 'middle',
            bottom: 10,
            left: 'center',
            // data: ['西凉', '益州', '兖州', '荆州', '幽州']
            data: ['小教', '教育学', '教管', '学前']
          },
          series: [
            {
              name: "学建委出品",
              type: 'pie',
              radius: mydata.radius,
              center: ['50%', '50%'],
              selectedMode: 'single',
              data: [
                {
                  value: mydata.xiaojiao,
                  name: '小教',
                  label: {
                    normal: {
                      formatter: [
                        '{title|{b}}{abg|}',
                        '{weatherHead|去向}{valueHead|人数}{rateHead|占比}',


                        `升学{value|${mydata.xj_shengxue}}${(mydata.xj_shengxue / (mydata.xiaojiao)).toFixed(2)}`,
                        `就业{value|${mydata.xj_jiuye}}${(mydata.xj_jiuye / (mydata.xiaojiao)).toFixed(2)}`,


                        // '{Showers|}{value|21}{rate|5.8%}'
                      ].join('\n'),
                      backgroundColor: '#eee',
                      borderColor: '#777',
                      borderWidth: 1,
                      borderRadius: 4,
                      rich: {
                        title: {
                          color: '#eee',
                          align: 'center'
                        },
                        abg: {
                          backgroundColor: '#333',
                          width: '100%',
                          align: 'right',
                          height: 25,
                          borderRadius: [4, 4, 0, 0]
                        },
                        Sunny: {
                          height: 30,
                          align: 'left',

                        },
                        Cloudy: {
                          height: 30,
                          align: 'left',

                        },
                        Showers: {
                          height: 30,
                          align: 'left',

                        },
                        weatherHead: {
                          color: '#333',
                          height: 24,
                          align: 'left'
                        },
                        hr: {
                          borderColor: '#777',
                          width: '100%',
                          borderWidth: 0.5,
                          height: 0
                        },
                        value: {
                          width: 20,
                          padding: [0, 20, 0, 30],
                          align: 'left'
                        },
                        valueHead: {
                          color: '#333',
                          width: 20,
                          padding: [0, 20, 0, 30],
                          align: 'center'
                        },
                        rate: {
                          width: 40,
                          align: 'right',
                          padding: [0, 10, 0, 0]
                        },
                        rateHead: {
                          color: '#333',
                          width: 40,
                          align: 'center',
                          padding: [0, 10, 0, 0]
                        }
                      }
                    }
                  }
                },
                {
                  value: mydata.jiaoguan, name: '教管', label: {
                    normal: {
                      formatter: [
                        '{title|{b}}{abg|}',
                        '{weatherHead|去向}{valueHead|人数}{rateHead|占比}',
                        `升学{value|${mydata.jg_shengxue}}${(mydata.jg_shengxue / (mydata.jiaoguan)).toFixed(2)}`,
                        `就业{value|${mydata.jg_jiuye}}${(mydata.jg_jiuye / (mydata.jiaoguan)).toFixed(2)}`,


                        // '{Showers|}{value|21}{rate|5.8%}'
                      ].join('\n'),
                      backgroundColor: '#eee',
                      borderColor: '#777',
                      borderWidth: 1,
                      borderRadius: 4,
                      rich: {
                        title: {
                          color: '#eee',
                          align: 'center'
                        },
                        abg: {
                          backgroundColor: '#333',
                          width: '100%',
                          align: 'right',
                          height: 25,
                          borderRadius: [4, 4, 0, 0]
                        },
                        Sunny: {
                          height: 30,
                          align: 'left',

                        },
                        Cloudy: {
                          height: 30,
                          align: 'left',

                        },
                        Showers: {
                          height: 30,
                          align: 'left',

                        },
                        weatherHead: {
                          color: '#333',
                          height: 24,
                          align: 'left'
                        },
                        hr: {
                          borderColor: '#777',
                          width: '100%',
                          borderWidth: 0.5,
                          height: 0
                        },
                        value: {
                          width: 20,
                          padding: [0, 20, 0, 30],
                          align: 'left'
                        },
                        valueHead: {
                          color: '#333',
                          width: 20,
                          padding: [0, 20, 0, 30],
                          align: 'center'
                        },
                        rate: {
                          width: 40,
                          align: 'right',
                          padding: [0, 10, 0, 0]
                        },
                        rateHead: {
                          color: '#333',
                          width: 40,
                          align: 'center',
                          padding: [0, 10, 0, 0]
                        }
                      }
                    }
                  }
                },
                {
                  value: mydata.jiaoyu, name: '教育学', label: {
                    normal: {
                      formatter: [
                        '{title|{b}}{abg|}',
                        '{weatherHead|去向}{valueHead|人数}{rateHead|占比}',
                        `升学{value|${mydata.jy_shengxue}}${(mydata.jy_shengxue / (mydata.jiaoyu)).toFixed(2)}`,
                        `就业{value|${mydata.jy_jiuye}}${(mydata.jy_jiuye / (mydata.jiaoyu)).toFixed(2)}`,


                        // '{Showers|}{value|21}{rate|5.8%}'
                      ].join('\n'),
                      backgroundColor: '#eee',
                      borderColor: '#777',
                      borderWidth: 1,
                      borderRadius: 4,
                      rich: {
                        title: {
                          color: '#eee',
                          align: 'center'
                        },
                        abg: {
                          backgroundColor: '#333',
                          width: '100%',
                          align: 'right',
                          height: 25,
                          borderRadius: [4, 4, 0, 0]
                        },
                        Sunny: {
                          height: 30,
                          align: 'left',
                        },
                        Cloudy: {
                          height: 30,
                          align: 'left',
                        },
                        Showers: {
                          height: 30,
                          align: 'left',
                        },
                        weatherHead: {
                          color: '#333',
                          height: 24,
                          align: 'left'
                        },
                        hr: {
                          borderColor: '#777',
                          width: '100%',
                          borderWidth: 0.5,
                          height: 0
                        },
                        value: {
                          width: 20,
                          padding: [0, 20, 0, 30],
                          align: 'left'
                        },
                        valueHead: {
                          color: '#333',
                          width: 20,
                          padding: [0, 20, 0, 30],
                          align: 'center'
                        },
                        rate: {
                          width: 40,
                          align: 'right',
                          padding: [0, 10, 0, 0]
                        },
                        rateHead: {
                          color: '#333',
                          width: 40,
                          align: 'center',
                          padding: [0, 10, 0, 0]
                        }
                      }
                    }
                  }
                },
                {
                  value: mydata.xueqian, name: '学前', label: {
                    normal: {
                      formatter: [
                        '{title|{b}}{abg|}',
                        '{weatherHead|去向}{valueHead|人数}{rateHead|占比}',
                        `升学{value|${mydata.xq_shengxue}}${(mydata.xq_shengxue / (mydata.xueqian)).toFixed(2)}`,
                        `就业{value|${mydata.xq_jiuye}}${(mydata.xq_jiuye / (mydata.xueqian)).toFixed(2)}`,


                        // '{Showers|}{value|21}{rate|5.8%}'
                      ].join('\n'),
                      backgroundColor: '#eee',
                      borderColor: '#777',
                      borderWidth: 1,
                      borderRadius: 4,
                      rich: {
                        title: {
                          color: '#eee',
                          align: 'center'
                        },
                        abg: {
                          backgroundColor: '#333',
                          width: '100%',
                          align: 'right',
                          height: 25,
                          borderRadius: [4, 4, 0, 0]
                        },
                        Sunny: {
                          height: 30,
                          align: 'left',

                        },
                        Cloudy: {
                          height: 30,
                          align: 'left',

                        },
                        Showers: {
                          height: 30,
                          align: 'left',

                        },
                        weatherHead: {
                          color: '#333',
                          height: 24,
                          align: 'left'
                        },
                        hr: {
                          borderColor: '#777',
                          width: '100%',
                          borderWidth: 0.5,
                          height: 0
                        },
                        value: {
                          width: 20,
                          padding: [0, 20, 0, 30],
                          align: 'left'
                        },
                        valueHead: {
                          color: '#333',
                          width: 20,
                          padding: [0, 20, 0, 30],
                          align: 'center'
                        },
                        rate: {
                          width: 40,
                          align: 'right',
                          padding: [0, 10, 0, 0]
                        },
                        rateHead: {
                          color: '#333',
                          width: 40,
                          align: 'center',
                          padding: [0, 10, 0, 0]
                        }
                      }
                    }
                  }
                }],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        }
      )
    }
  },
  mounted() {
    this.initCharts();
  }
}
</script>

<style lang="stylus">
.table-total
  width:100%
  
#chartmain
  width 100%
  height 500px

#chartmain-box
  display flex
  justify-content center
  flex-wrap wrap
</style>
