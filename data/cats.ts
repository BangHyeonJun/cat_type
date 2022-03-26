interface CatType {
	id: number;
	type: type;
	images: string[];
	name: string;
	home: string;
	bodyType: string;
	weight: string;
	fur: string;
	description: string;
	face: string;
	furDetail: string;
	personality: string;
	care: string;
}

enum type {
	NorwegianForestCat = "NorwegianForestCat",
	Ragdoll = "Ragdoll",
	RussianBlue = "RussianBlue",
	Munchkin = "Munchkin",
	Bengal = "Bengal",
	BritishShorthair = "BritishShorthair",
	SiameseCat = "SiameseCat",
	ScottishFold = "ScottishFold",
	Sphynx = "Sphynx",
	AmericanShorthair = "AmericanShorthair",
	Abyssinian = "Abyssinian",
	KoreanShorthair = "KoreanShorthair",
	TurkishAngora = "TurkishAngora",
	PersianCat = "PersianCat",
}

enum fur {
	long = "장모",
	middlelong = "중장모",
}

const cats: CatType[] = [
	{
		id: 0,
		type: type.NorwegianForestCat,
		images: [
			"1.jpg",
			"2.jpg",
			"3.jpg",
			"4.jpg",
			"5.jpg",
			"6.jpg",
			"7.jpg",
			"8.jpg",
			"9.jpg",
			"10.jpg",
			"11.jpg",
			"12.jpg",
			"13.jpg",
			"14.jpg",
			"15.jpg",
			"16.jpg",
			"17.jpg",
			"18.jpg",
			"19.jpg",
			"20.jpg",
		],
		name: "노르웨이 숲 고양이",
		home: "노르웨이",
		bodyType: "섭스텐셜",
		weight: "5.5~7kg",
		fur: fur.middlelong,
		description:
			"조상 중에 터키나 러시아산의 긴 털 고양이가 섞여 있다는 설이 있다. 수백 년의 세월을 거쳐 북유럽의 혹독한 날씨를 견딜 수 있는 방수성 장모로 진화한 것으로 보인다. 성장하는 데에 오래 걸리지만 완전히 어른이 되었을 때의 큼직한 체격은 야성미를 더욱 더해준다.",
		face: "크고 튼튼하며 다리도 몸체도 전체적으로 매우 단단한 근육질. 귀에는 장식모가 나 있다. 눈은 파란색을 제외한 모든 색을 가질 수 있다. 전신이 흰 고양이는 파란 눈도 순종으로 인정된다.",
		furDetail:
			"중장모를 가지고 있다. 부드럽고 빽빽한 속털과 기름기 있는 겉털이 보온뿐만 아니라 방수도 겸한다. 주둥이와 배는 희고 등쪽에는 줄무늬가 들어간 노르웨이 숲고양이가 가장 유명하다. 가을철 털갈이를 마치고 나면 방한용 갈기가 가슴과 목에 아름답게 자리잡는다.",
		personality:
			"야성적인 면과 상냥한 면을 겸비하고 있다. 사람을 좋아하고 끈끈한 유대를 중시하는 사랑스러운 성격이면서 나무타기를 좋아하는 장난꾸러기다.",
		care: "잘 뭉치는 털이 아니므로 주 1~2회 빗질만으로도 엉킴을 막고 아름다운 털을 유지할 수 있다. 털갈이철인 봄가을에는 자주 빗질해준다.",
	},
	{
		id: 1,
		type: type.Ragdoll,
		images: [
			"1.jpg",
			"2.jpg",
			"3.jpg",
			"4.jpg",
			"5.jpg",
			"6.jpg",
			"7.jpg",
			"8.jpg",
			"9.jpg",
			"10.jpg",
			"11.jpg",
			"12.jpg",
			"13.jpg",
			"14.jpg",
			"15.jpg",
			"16.jpg",
			"17.jpg",
			"18.jpg",
			"19.jpg",
			"20.jpg",
		],
		name: "랙돌",
		home: "미국",
		bodyType: "섭스텐셜",
		weight: "2.5 ~ 11 kg",
		fur: fur.middlelong,
		description:
			"1960년대, 미국 캘리포니아의 육종가인 앤 베이커(Ann Baker)가 조세핀이라는 긴 털을 가진 고양이의 새끼들을 이용하여 만들어 낸 품종이다.베이커는 조세핀의 새끼 중 매우 얌전한 특징을 보이는 새끼들을 버만 또는 버미즈와 같은 외형을 가진 고양이와의 교배시켰다. 이렇게 만들어진 품종인 랙돌(ragdoll)은 ‘봉제인형’이라는 뜻이 있는데, 이는 랙돌을 안아 올리면 몸에 힘을 빼고 축 늘어져 사람에게 몸을 맡기기 때문에 붙은 이름이다.",
		face: "길고 단단한 몸통에 짧고 강한 다리를 가진 중대형 종이다. 전체적으로 둥그스름한 넓은 쐐기형의 머리를 가지며 이마는 편평하다. 푸른 눈동자는 끝 부분이 처져 있다. 코와 윗입술은 일직선을 그린다. 꼬리의 길이는 몸길이와 같고, 걸을 때는 꼬리가 등 위로 올라간다.",
		furDetail:
			"중간보다 약간 긴 길이의 겉털과 속털이 부드럽고 촘촘하게 나 있다.",
		personality:
			"매우 느긋한 성격으로 평소에 매우 느릿느릿한 걸음걸이로 움직이며 안아 올리면 몸에 힘을 빼고 축 늘어진다. 사회적이며 사람을 좋아하여 장난감을 가지고 놀거나 아이들과 노는 것을 좋아한다.",
		care: "공격성향이 매우 낮아 집고양이로 적당하다. 다루기 쉽고 순하다.",
	},
];

export { cats };
export type { CatType };