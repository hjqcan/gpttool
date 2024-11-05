import { Tool } from '../types/Tool';

export const tools: Tool[] = [
  {
    id: '1',
    name: 'ChatGPT',
    description: '地表最强AI机器人',
    url: 'https://chatgpt.com/',
    category: 'AI对话',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
  },
  {
    id: '2',
    name: 'Midjourney',
    description: '目前最强的AI绘画工具',
    url: 'https://www.midjourney.com',
    category: 'AI绘画',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/e/e6/Midjourney_Emblem.png',
  },
  {
    id: '3',
    name: 'Copy.ai',
    description: 'AI社交营销文案写作助手',
    url: 'https://www.copy.ai',
    category: 'AI写作',
    imageUrl:
      'https://cdn.prod.website-files.com/628288c5cd3e8411b90a36a4/658311295861d76598256dae_favicon%209.png',
  },
  {
    id: '4',
    name: 'Stable Diffusion',
    description: '最强开源AI绘画工具',
    url: 'https://stability.ai/stable-image',
    category: 'AI绘画',
    imageUrl:
      'https://images.squarespace-cdn.com/content/v1/6213c340453c3f502425776e/cfbf5bc5-47d4-4f4a-b133-23bd12a7d7c2/favicon.ico',
  },
  {
    id: '5',
    name: 'Suno',
    description: '最强AI音乐创作工具',
    url: 'https://www.suno.ai',
    category: 'AI音乐',
    imageUrl: 'https://suno.com/favicon.ico',
  },
  {
    id: '6',
    name: '腾讯智影',
    description: '腾讯出品的智能视频创作工具',
    url: 'https://zenvideo.qq.com',
    category: 'AI视频',
    imageUrl: '/images/txzyfavicon.ico',
  },
];
