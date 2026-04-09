// 商品参数PK台 - 模拟数据
// 包含瑜伽裤、香氛、四件套三类商品，每类3-4个

const mockProductsData = {
    // ==================== 瑜伽裤类 ====================
    yoga_pants: [
        {
            id: 'yoga_001',
            name: 'Lululemon Align 高腰紧身裤 25英寸',
            platform: '天猫',
            url: 'https://detail.tmall.com/item.htm?id=954168320268',
            price: 850,
            originalPrice: 850,
            image: 'https://img.alicdn.com/imgextra/i1/2200724907121/O1CN01_1.jpg',

            // 材质参数
            material: {
                mainFabric: 'Nulu™ 面料',
                composition: '81% 锦纶 + 19% 氨纶',
                gramWeight: '180g/m²'
            },

            // 安全品质参数
            safety: {
                safetyLevel: 'B类（直接接触皮肤）',
                antibacterial: {
                    standard: 'GB/T 20944.3-2008',
                    level: 'AAA级抗菌',
                    tested: true
                },
                formaldehyde: '未检出',
                pH: '6.5（弱酸性）',
                fluorescence: '无荧光剂'
            },

            // 品类核心参数
            specs: {
                elastaneContent: '19%',
                breathability: '≥200mm/s',
                pillingResistance: '4级',
                elasticRecovery: '≥90%',
                fourWayStretch: true,
                moistureWicking: '速干级别'
            },

            // 检测报告
            certificates: [
                { name: 'GB/T 22849-2014 针织运动服', issuer: 'SGS', verified: true },
                { name: 'GB 18401-2010 B类 安全技术规范', issuer: '中纺标', verified: true },
                { name: '抗菌检测报告', issuer: '国家纺织品质检中心', verified: true }
            ],

            // 价格历史（近6个月，12个数据点）
            priceHistory: [850, 850, 799, 850, 850, 799, 850, 765, 850, 850, 799, 850],
            lowestPrice: 765,
            lowestPriceDate: '2024年11月',

            // 口碑数据
            reputation: {
                totalReviews: 12680,
                positiveRate: 96,
                negativeRate: 4,
                positiveKeywords: ['面料柔软', '穿着舒适', '透气性好', '显瘦'],
                negativeKeywords: ['价格贵', '容易起球', '尺码偏小']
            }
        },
        {
            id: 'yoga_002',
            name: 'MAIA ACTIVE 云感高腰紧身裤',
            platform: '天猫',
            url: 'https://detail.tmall.com/item.htm?id=733245459611',
            price: 299,
            originalPrice: 399,
            image: 'https://img.alicdn.com/imgextra/i2/2838892714/O1CN01_2.jpg',

            material: {
                mainFabric: '云感面料',
                composition: '75% 锦纶 + 25% 氨纶',
                gramWeight: '220g/m²'
            },

            safety: {
                safetyLevel: 'B类（直接接触皮肤）',
                antibacterial: {
                    standard: 'GB/T 20944.3-2008',
                    level: 'AA级抗菌',
                    tested: true
                },
                formaldehyde: '未检出',
                pH: '6.8',
                fluorescence: '无荧光剂'
            },

            specs: {
                elastaneContent: '25%',
                breathability: '≥180mm/s',
                pillingResistance: '3-4级',
                elasticRecovery: '≥88%',
                fourWayStretch: true,
                moistureWicking: '速干级别'
            },

            certificates: [
                { name: 'GB/T 22849-2014 针织运动服', issuer: '中纺标', verified: true },
                { name: 'GB 18401-2010 B类', issuer: 'SGS', verified: true }
            ],

            priceHistory: [399, 399, 349, 299, 299, 349, 299, 279, 299, 299, 269, 299],
            lowestPrice: 269,
            lowestPriceDate: '2025年3月',

            reputation: {
                totalReviews: 8520,
                positiveRate: 94,
                negativeRate: 6,
                positiveKeywords: ['性价比高', '面料舒适', '版型好看', '收腹效果好'],
                negativeKeywords: ['穿久了松', '裤脚卷边', '腰部勒']
            }
        },
        {
            id: 'yoga_003',
            name: 'VFU 运动瑜伽裤 高腰显瘦',
            platform: '天猫',
            url: 'https://detail.tmall.com/item.htm?id=629458212389',
            price: 169,
            originalPrice: 199,
            image: 'https://img.alicdn.com/imgextra/i3/2854692912/O1CN01_3.jpg',

            material: {
                mainFabric: '锦纶氨纶混纺',
                composition: '78% 锦纶 + 22% 氨纶',
                gramWeight: '200g/m²'
            },

            safety: {
                safetyLevel: 'B类（直接接触皮肤）',
                antibacterial: {
                    standard: '-',
                    level: '未标注抗菌',
                    tested: false
                },
                formaldehyde: '未检出',
                pH: '7.0',
                fluorescence: '未检测'
            },

            specs: {
                elastaneContent: '22%',
                breathability: '≥150mm/s',
                pillingResistance: '3级',
                elasticRecovery: '≥85%',
                fourWayStretch: true,
                moistureWicking: '普通'
            },

            certificates: [
                { name: 'GB 18401-2010 B类', issuer: '第三方检测机构', verified: true }
            ],

            priceHistory: [199, 179, 169, 159, 169, 179, 169, 149, 159, 169, 159, 169],
            lowestPrice: 149,
            lowestPriceDate: '2024年10月',

            reputation: {
                totalReviews: 23450,
                positiveRate: 91,
                negativeRate: 9,
                positiveKeywords: ['便宜实惠', '颜色好看', '弹性好', '适合入门'],
                negativeKeywords: ['容易起球', '穿几次就松', '透气一般']
            }
        },
        {
            id: 'yoga_004',
            name: '工厂直供 高腰瑜伽裤 无 logo 同款',
            platform: '1688',
            url: 'https://detail.1688.com/offer/732095503102.html',
            price: 68,
            originalPrice: 68,
            image: 'https://cbu01.alicdn.com/imgextra/i4/1688offer/O1CN01_4.jpg',

            material: {
                mainFabric: '锦纶氨纶混纺',
                composition: '80% 锦纶 + 20% 氨纶',
                gramWeight: '180g/m²'
            },

            safety: {
                safetyLevel: '未标注',
                antibacterial: {
                    standard: '-',
                    level: '无',
                    tested: false
                },
                formaldehyde: '未检测',
                pH: '未检测',
                fluorescence: '未检测'
            },

            specs: {
                elastaneContent: '20%',
                breathability: '≥120mm/s',
                pillingResistance: '未标注',
                elasticRecovery: '未标注',
                fourWayStretch: true,
                moistureWicking: '普通'
            },

            certificates: [],

            priceHistory: [68, 65, 68, 62, 68, 68, 65, 60, 62, 65, 68, 68],
            lowestPrice: 60,
            lowestPriceDate: '2024年11月',

            reputation: {
                totalReviews: 1250,
                positiveRate: 87,
                negativeRate: 13,
                positiveKeywords: ['价格便宜', '质量还行', '适合批发'],
                negativeKeywords: ['做工粗糙', '有线头', '色差大', '无检测报告']
            }
        }
    ],

    // ==================== 香氛类 ====================
    fragrance: [
        {
            id: 'frag_001',
            name: 'Diptyque 蒂普提克 玫瑰之水 香水',
            platform: '天猫国际',
            url: 'https://detail.tmall.com/item.htm?id=596348527842',
            price: 980,
            originalPrice: 1050,
            image: 'https://img.alicdn.com/imgextra/i1/2215302037/O1CN01_f1.jpg',
            volume: '50ml',

            // 香调参数
            fragrance: {
                family: '花香调',
                topNotes: '香柠檬、荔枝',
                middleNotes: '玫瑰、老鹳草',
                baseNotes: '雪松、麝香',
                concentration: 'EDT（淡香水）',
                longevity: '4-6小时',
                sillage: '中等'
            },

            // 安全品质参数
            safety: {
                IFRACompliance: true,
                allergens: ['香叶醇', '柠檬烯', '香茅醇'],
                alcoholContent: '80%',
                packaging: '玻璃瓶+纸盒',
                origin: '法国进口'
            },

            certificates: [
                { name: '国家化妆品备案', issuer: '国家药监局', verified: true },
                { name: 'IFRA 安全认证', issuer: 'IFRA', verified: true },
                { name: '海关进口检疫证明', issuer: '海关', verified: true }
            ],

            priceHistory: [1050, 980, 1050, 980, 920, 980, 980, 880, 920, 980, 980, 980],
            lowestPrice: 880,
            lowestPriceDate: '2024年11月',

            reputation: {
                totalReviews: 3890,
                positiveRate: 97,
                negativeRate: 3,
                positiveKeywords: ['味道高级', '留香持久', '包装精美', '适合送礼'],
                negativeKeywords: ['价格贵', '留香一般', '太小瓶']
            }
        },
        {
            id: 'frag_002',
            name: 'Aesop 伊索 塔西提护手霜香薰组合',
            platform: '天猫',
            url: 'https://detail.tmall.com/item.htm?id=635850032147',
            price: 520,
            originalPrice: 580,
            image: 'https://img.alicdn.com/imgextra/i2/2206685430/O1CN01_f2.jpg',
            volume: '护手霜75ml+香薰',

            fragrance: {
                family: '木质花香调',
                topNotes: '佛手柑、柠檬',
                middleNotes: '薰衣草、天竺葵',
                baseNotes: '檀香、雪松',
                concentration: '护手霜留香',
                longevity: '3-4小时',
                sillage: '近距离'
            },

            safety: {
                IFRACompliance: true,
                allergens: ['柠檬烯', '香叶醇'],
                alcoholContent: '无酒精',
                packaging: '玻璃瓶+铝管',
                origin: '澳大利亚'
            },

            certificates: [
                { name: '国家化妆品备案', issuer: '国家药监局', verified: true },
                { name: 'Cruelty-Free 无动物测试认证', issuer: 'Leaping Bunny', verified: true }
            ],

            priceHistory: [580, 560, 520, 540, 520, 560, 520, 480, 500, 520, 540, 520],
            lowestPrice: 480,
            lowestPriceDate: '2024年11月',

            reputation: {
                totalReviews: 2150,
                positiveRate: 95,
                negativeRate: 5,
                positiveKeywords: ['味道清新', '滋润不油腻', '包装高级', '味道治愈'],
                negativeKeywords: ['贵', '味道淡', '容量小']
            }
        },
        {
            id: 'frag_003',
            name: '观夏 昆仑煮雪 东方室内香薰',
            platform: '淘宝',
            url: 'https://item.taobao.com/item.htm?id=652348912456',
            price: 298,
            originalPrice: 298,
            image: 'https://img.alicdn.com/imgextra/i3/2948562012/O1CN01_f3.jpg',
            volume: '100ml',

            fragrance: {
                family: '木质清香调',
                topNotes: '雪松、薄荷',
                middleNotes: '白茶、兰花',
                baseNotes: '琥珀、麝香',
                concentration: '藤条香薰',
                longevity: '30-45天',
                sillage: '全屋弥漫'
            },

            safety: {
                IFRACompliance: true,
                allergens: ['柠檬烯'],
                alcoholContent: '无酒精',
                packaging: '陶瓷瓶+藤条',
                origin: '中国'
            },

            certificates: [
                { name: 'IFRA 安全认证', issuer: 'IFRA', verified: true },
                { name: '质检报告', issuer: '国家化妆品质量监督检验中心', verified: true }
            ],

            priceHistory: [298, 298, 268, 298, 298, 268, 298, 248, 268, 298, 298, 298],
            lowestPrice: 248,
            lowestPriceDate: '2024年11月',

            reputation: {
                totalReviews: 8960,
                positiveRate: 94,
                negativeRate: 6,
                positiveKeywords: ['味道高级', '国货之光', '包装美', '持久'],
                negativeKeywords: ['藤条发霉', '味道太淡', '性价比一般']
            }
        },
        {
            id: 'frag_004',
            name: '义乌工厂 香薰精油扩香液 同款代工',
            platform: '1688',
            url: 'https://detail.1688.com/offer/902195705858.html',
            price: 28,
            originalPrice: 35,
            image: 'https://cbu01.alicdn.com/imgextra/i4/1688offer/O1CN01_f4.jpg',
            volume: '100ml',

            fragrance: {
                family: '混合花香调',
                topNotes: '未标注',
                middleNotes: '未标注',
                baseNotes: '未标注',
                concentration: '藤条香薰',
                longevity: '15-20天',
                sillage: '小范围'
            },

            safety: {
                IFRACompliance: false,
                allergens: '未标注',
                alcoholContent: '未标注',
                packaging: '塑料瓶+藤条',
                origin: '中国'
            },

            certificates: [],

            priceHistory: [35, 30, 28, 25, 28, 28, 25, 22, 25, 28, 30, 28],
            lowestPrice: 22,
            lowestPriceDate: '2024年11月',

            reputation: {
                totalReviews: 3680,
                positiveRate: 82,
                negativeRate: 18,
                positiveKeywords: ['便宜', '量大', '味道还行'],
                negativeKeywords: ['味道刺鼻', '留香短', '包装简陋', '无检测报告']
            }
        }
    ],

    // ==================== 四件套类 ====================
    bedding: [
        {
            id: 'bed_001',
            name: '罗莱家纺 60支长绒棉四件套 纯色简约',
            platform: '天猫',
            url: 'https://detail.tmall.com/item.htm?id=598236154789',
            price: 899,
            originalPrice: 1299,
            image: 'https://img.alicdn.com/imgextra/i1/1851080293/O1CN01_b1.jpg',
            size: '1.8m床（200x230cm被套）',

            // 材质参数
            material: {
                fabric: '长绒棉',
                yarnCount: '60支',
                weavingProcess: '贡缎',
                composition: '100%棉',
                gramWeight: '128g/m²'
            },

            // 安全品质参数
            safety: {
                safetyLevel: 'A类（婴幼儿标准）',
                formaldehyde: '未检出',
                pH: '6.2（弱酸性）',
                colorFastness: '4级（优）',
                fluorescence: '无荧光剂',
                shrinkage: '≤3%'
            },

            // 品类核心参数
            specs: {
                threadCount: '300根/平方英寸',
                breathability: '≥180mm/s',
                pillingResistance: '4级',
                handFeel: '丝滑细腻',
                applicableSeasons: '四季通用'
            },

            certificates: [
                { name: 'GB 18401-2010 A类 安全技术规范', issuer: '中纺标', verified: true },
                { name: 'Oeko-Tex Standard 100', issuer: '国际环保纺织协会', verified: true },
                { name: '新疆长绒棉认证', issuer: '中国棉花协会', verified: true }
            ],

            priceHistory: [1299, 1099, 999, 899, 999, 1099, 999, 799, 899, 999, 1099, 899],
            lowestPrice: 799,
            lowestPriceDate: '2024年11月',

            reputation: {
                totalReviews: 15230,
                positiveRate: 96,
                negativeRate: 4,
                positiveKeywords: ['手感丝滑', '颜色高级', '不起球', '透气舒适'],
                negativeKeywords: ['价格贵', '容易皱', '需要熨烫']
            }
        },
        {
            id: 'bed_002',
            name: '水星家纺 天丝四件套 夏凉款',
            platform: '天猫',
            url: 'https://detail.tmall.com/item.htm?id=612589634521',
            price: 599,
            originalPrice: 799,
            image: 'https://img.alicdn.com/imgextra/i2/1968252341/O1CN01_b2.jpg',
            size: '1.5m床（200x230cm被套）',

            material: {
                fabric: '天丝（莱赛尔纤维）',
                yarnCount: '60支',
                weavingProcess: '平纹',
                composition: '100%莱赛尔',
                gramWeight: '110g/m²'
            },

            safety: {
                safetyLevel: 'A类（婴幼儿标准）',
                formaldehyde: '未检出',
                pH: '6.5',
                colorFastness: '4级',
                fluorescence: '无荧光剂',
                shrinkage: '≤2%'
            },

            specs: {
                threadCount: '200根/平方英寸',
                breathability: '≥220mm/s',
                pillingResistance: '3-4级',
                handFeel: '冰凉顺滑',
                applicableSeasons: '夏季'
            },

            certificates: [
                { name: 'GB 18401-2010 A类', issuer: 'SGS', verified: true },
                { name: 'Lenzing TENCEL™ 认证', issuer: '兰精公司', verified: true }
            ],

            priceHistory: [799, 699, 599, 549, 599, 699, 599, 499, 549, 599, 699, 599],
            lowestPrice: 499,
            lowestPriceDate: '2024年11月',

            reputation: {
                totalReviews: 9870,
                positiveRate: 94,
                negativeRate: 6,
                positiveKeywords: ['凉爽透气', '手感顺滑', '夏天必备', '裸睡神器'],
                negativeKeywords: ['容易起皱', '机洗变形', '价格贵']
            }
        },
        {
            id: 'bed_003',
            name: '网易严选 纯棉四件套 简约纯色',
            platform: '天猫',
            url: 'https://detail.tmall.com/item.htm?id=625489123654',
            price: 299,
            originalPrice: 399,
            image: 'https://img.alicdn.com/imgextra/i3/2845639871/O1CN01_b3.jpg',
            size: '1.5m床（200x230cm被套）',

            material: {
                fabric: '纯棉',
                yarnCount: '40支',
                weavingProcess: '斜纹',
                composition: '100%棉',
                gramWeight: '145g/m²'
            },

            safety: {
                safetyLevel: 'B类（直接接触皮肤）',
                formaldehyde: '未检出',
                pH: '6.8',
                colorFastness: '3-4级',
                fluorescence: '无荧光剂',
                shrinkage: '≤4%'
            },

            specs: {
                threadCount: '133根/平方英寸',
                breathability: '≥150mm/s',
                pillingResistance: '3级',
                handFeel: '柔软亲肤',
                applicableSeasons: '四季通用'
            },

            certificates: [
                { name: 'GB 18401-2010 B类', issuer: '第三方检测机构', verified: true }
            ],

            priceHistory: [399, 349, 299, 279, 299, 349, 299, 259, 279, 299, 349, 299],
            lowestPrice: 259,
            lowestPriceDate: '2024年11月',

            reputation: {
                totalReviews: 32560,
                positiveRate: 92,
                negativeRate: 8,
                positiveKeywords: ['性价比高', '手感舒适', '颜色百搭', '质量不错'],
                negativeKeywords: ['有点薄', '洗后缩水', '容易起皱']
            }
        }
    ]
};

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = mockProductsData;
}