interface IDefaultArg {
	/**
	 * 인증키
	 *
	 * 자세한 사항은 나이스 교육정보 개방포털을 확인하세요
	 * https://open.neis.go.kr/portal/guide/actKeyPage.do
	 */
	KEY: any;
	/**
	 * 호출문서 (xml, json)
	 */
	Type: "xml" | "json";
}

interface IConfig {
	/**
	 * 페이지 위치
	 */
	pIndex?: number;
	/**
	 * 페이지 당 신청 숫자
	 */
	pSize?: number;
}

export { IDefaultArg, IConfig };
