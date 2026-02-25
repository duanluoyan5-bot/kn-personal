/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  User, 
  BookOpen, 
  Image as ImageIcon, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Heart,
  ChevronRight
} from 'lucide-react';

// --- Types ---
type Tab = '首页' | '关于我' | '我的经历' | '我的照片';

// --- Components ---

const Sidebar = ({ name }: { name: string }) => (
  <div className="w-full lg:w-64 flex flex-col gap-4">
    {/* Profile Card */}
    <div className="bg-white rounded-lg p-4 card-shadow flex flex-col items-center">
      <div className="w-32 h-32 rounded-lg overflow-hidden mb-4 border-4 border-pastel-pink-light">
        <img 
          src="https://picsum.photos/seed/kuangning/400/400" 
          alt="Profile" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <h2 className="text-xl font-bold text-pastel-brown">{name}</h2>
      <p className="text-sm text-gray-500">金融领域从业者</p>
    </div>

    {/* Info Card */}
    <div className="bg-pastel-pink/30 rounded-lg p-4 card-shadow">
      <ul className="space-y-3 text-sm">
        <li className="flex items-center gap-2 border-b border-pastel-pink/50 pb-2">
          <User size={14} className="text-pastel-brown" />
          <span>姓名：{name}</span>
        </li>
        <li className="flex items-center gap-2 border-b border-pastel-pink/50 pb-2">
          <MapPin size={14} className="text-pastel-brown" />
          <span>地点：湖北</span>
        </li>
        <li className="flex items-center gap-2 border-b border-pastel-pink/50 pb-2">
          <GraduationCap size={14} className="text-pastel-brown" />
          <span>学校：湖北大学知行学院</span>
        </li>
        <li className="flex items-center gap-2">
          <Heart size={14} className="text-pastel-brown" />
          <span>爱好：爬山、桌球</span>
        </li>
      </ul>
    </div>
  </div>
);

const HomeTab = () => (
  <div className="space-y-6">
    <section className="bg-white/80 rounded-lg p-6 card-shadow">
      <h3 className="text-lg font-bold text-pastel-brown mb-4 flex items-center gap-2">
        <span className="w-1 h-6 bg-pastel-pink rounded-full"></span>
        自我介绍
      </h3>
      <p className="leading-relaxed text-gray-700">
        大家好，我是况小宁，一名对金融领域充满热情的从业者。我毕业于湖北大学知行学院金融学专业，在校期间不仅积累了扎实的专业理论基础，还通过丰富的实践活动锻炼了自己的组织与沟通能力。我始终保持着积极的生活态度和清晰的思维，期待在金融行业不断深耕。
      </p>
    </section>

    <section className="bg-white/80 rounded-lg p-6 card-shadow">
      <h3 className="text-lg font-bold text-pastel-brown mb-4 flex items-center gap-2">
        <span className="w-1 h-6 bg-pastel-pink rounded-full"></span>
        最新动态
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="group cursor-pointer">
            <div className="aspect-video rounded-lg overflow-hidden mb-2 relative">
              <img 
                src={`https://picsum.photos/seed/dynamic${i}/600/400`} 
                alt="Dynamic" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-sm font-medium">查看详情</span>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-600 line-clamp-1">记录生活中的美好瞬间 - 2024.11.{i + 10}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

const AboutTab = () => (
  <div className="space-y-6">
    <section className="bg-white/80 rounded-lg p-6 card-shadow">
      <h3 className="text-lg font-bold text-pastel-brown mb-4 flex items-center gap-2">
        <GraduationCap size={20} /> 教育背景
      </h3>
      <div className="space-y-4">
        <div className="border-l-2 border-pastel-pink pl-4">
          <div className="flex justify-between items-start mb-1">
            <h4 className="font-bold text-gray-800">金融学本科 | 湖北大学知行学院</h4>
            <span className="text-xs text-gray-500">2017.09 - 2022.06</span>
          </div>
          <p className="text-sm text-gray-600">主修保险学、金融营销、市场营销等课程，打下了扎实的专业理论基础。</p>
        </div>
        <div className="border-l-2 border-pastel-pink pl-4">
          <h4 className="font-bold text-gray-800">硕士备考经历</h4>
          <p className="text-sm text-gray-600">曾备考西南财经大学保险学硕士，对金融市场有更深入的研究与思考。</p>
        </div>
      </div>
    </section>

    <section className="bg-white/80 rounded-lg p-6 card-shadow">
      <h3 className="text-lg font-bold text-pastel-brown mb-4 flex items-center gap-2">
        <Briefcase size={20} /> 专业经历
      </h3>
      <div className="space-y-4">
        {[
          { title: "学院首个金融协会核心成员", desc: "担任组织部副部长，组织金融知识普及活动，覆盖超500人。" },
          { title: "全国金融与证券投资模拟实训大赛", desc: "负责数据分析与报告撰写，锻炼了数据洞察与团队协作能力。" },
          { title: "大学生营销大赛", desc: "策划与执行产品销售方案，成功签单11位客户，提升了市场拓展能力。" }
        ].map((exp, idx) => (
          <div key={idx} className="flex gap-3">
            <div className="mt-1.5 w-2 h-2 rounded-full bg-pastel-pink shrink-0"></div>
            <div>
              <h4 className="font-bold text-gray-800">{exp.title}</h4>
              <p className="text-sm text-gray-600">{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-white/80 rounded-lg p-6 card-shadow">
      <h3 className="text-lg font-bold text-pastel-brown mb-4 flex items-center gap-2">
        <Heart size={20} /> 技能与优势
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-pastel-pink-light rounded-lg p-4">
          <h4 className="font-bold text-pastel-brown mb-2">专业能力</h4>
          <p className="text-sm text-gray-600">扎实的金融理论，熟悉金融产品与市场逻辑。</p>
        </div>
        <div className="bg-pastel-blue/30 rounded-lg p-4">
          <h4 className="font-bold text-pastel-brown mb-2">软技能</h4>
          <p className="text-sm text-gray-600">抗压能力强，善于换位思考，精准把握客户需求。</p>
        </div>
      </div>
    </section>
  </div>
);

const ArticlesTab = () => (
  <div className="space-y-4">
    {[
      { title: "金融市场观察：保险行业的未来趋势", date: "2024.11.27", author: "况宁", excerpt: "随着科技的发展，保险行业正在经历前所未有的变革。本文将从数据化运营和客户需求变化两个维度进行深度分析..." },
      { title: "从营销大赛看客户沟通的艺术", date: "2024.10.31", author: "况宁", excerpt: "在最近的营销大赛中，我深刻体会到，成功的销售不仅仅是卖产品，更是建立信任的过程。通过11位客户的签单经历..." },
      { title: "金融学子的自我修养：理论与实践的结合", date: "2024.10.27", author: "况宁", excerpt: "在湖北大学知行学院的四年里，我一直在思考如何将枯燥的金融理论转化为实际的分析能力。通过参与金融协会..." }
    ].map((article, idx) => (
      <motion.div 
        key={idx}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: idx * 0.1 }}
        className="bg-white/80 rounded-lg p-5 card-shadow flex flex-col md:flex-row gap-5 group cursor-pointer hover:bg-white transition-colors"
      >
        <div className="w-full md:w-48 h-32 rounded-lg overflow-hidden shrink-0">
          <img 
            src={`https://picsum.photos/seed/article${idx}/400/300`} 
            alt="Article" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-pastel-brown transition-colors">{article.title}</h4>
          <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
            <span>发布人：{article.author}</span>
            <span>发布时间：{article.date}</span>
          </div>
          <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">{article.excerpt}</p>
        </div>
      </motion.div>
    ))}
  </div>
);

const PortfolioTab = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
      <motion.div 
        key={i}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: i * 0.05 }}
        className="aspect-square bg-white rounded-lg p-2 card-shadow group cursor-pointer"
      >
        <div className="w-full h-full rounded-md overflow-hidden relative">
          <img 
            src={`https://picsum.photos/seed/portfolio${i}/500/500`} 
            alt="Work" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-pastel-brown/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white text-xs font-bold px-3 py-1 border border-white rounded-full">查看作品</span>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('首页');

  const tabs: Tab[] = ['首页', '关于我', '我的经历', '我的照片'];

  return (
    <div className="min-h-screen flex flex-col items-center pb-12">
      {/* Header Banner */}
      <div className="w-full h-48 md:h-64 relative overflow-hidden">
        <img 
          src="https://picsum.photos/seed/banner/1920/600?blur=2" 
          alt="Banner" 
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-transparent to-pastel-blue/50">
          <h1 className="text-4xl md:text-5xl font-bold text-pastel-brown tracking-widest drop-shadow-sm">况宁的个人空间</h1>
          <p className="text-pastel-brown/70 mt-2 font-medium">欢迎来到我的数字花园</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="w-full max-w-6xl bg-pastel-pink/80 backdrop-blur-sm sticky top-0 z-50 flex justify-center py-3 card-shadow mb-8">
        <div className="flex gap-4 md:gap-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeTab === tab 
                  ? 'bg-white text-pastel-brown shadow-sm' 
                  : 'text-white hover:bg-white/20'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="w-full max-w-6xl px-4 flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <Sidebar name="况小宁" />

        {/* Tab Content */}
        <div className="flex-1 min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === '首页' && <HomeTab />}
              {activeTab === '关于我' && <AboutTab />}
              {activeTab === '我的经历' && <ArticlesTab />}
              {activeTab === '我的照片' && <PortfolioTab />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-400 text-sm">
        <p>© 2024 况小宁的个人空间 | 设计灵感源自温馨治愈系风格</p>
      </footer>
    </div>
  );
}
