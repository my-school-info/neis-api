# neis-api

> 나이스 오픈 API 라이브러리 - 학교정보, 급식정보, 학사일정, 시간표, 반정보, 학교학과정보, 학교계열정보, 강의실정보, 특수학교시간표

본 라이브러리는 `Node.js` 환경에서 이용할 수 있는 [나이스 오픈 API](https://open.neis.go.kr/) 라이브러리입니다.

- API
  - [Neis](###Neis)
  - [(Method) Neis.getSchoolInfo](<###-(Method)-Neis.getSchoolInfo>)
  - [(Method) Neis.getMealInfo](<###-(Method)-Neis.getMealInfo>)
  - [(Method) Neis.getClassInfo](<###-(Method)-Neis.getClassInfo>)
  - [(Method) Neis.getMajorInfo](<###-(Method)-Neis.getMajorInfo>)
  - [(Method) Neis.getAflcoInfo](<###-(Method)-Neis.getAflcoInfo>)
  - [(Method) Neis.getTimeClassroomInfo](<###-(Method)-Neis.getTimeClassroomInfo>)
  - [(Method) Neis.getSchedule](<###-(Method)-Neis.getSchedule>)
  - [(Method) Neis.getTimetable](<###-(Method)-Neis.getTimetable>)
- 예제코드
  - [학교기본정보 조회](###-학교기본정보-조회)
  - [급식식단정보 조회](###-급식식단정보-조회)
  - [반정보 조회](###-반정보-조회)
  - [학교학과정보 조회](###-학교학과정보-조회)
  - [학교계열정보 조회](###-학교계열정보-조회)
  - [시간표강의실정보 조회](###-시간표강의실정보-조회)
  - [학교학사일정 조회](###-학교학사일정-조회)
  - [학교시간표 조회](###-학교시간표-조회)

## 설치

```
yarn add @my-school.info/neis-api

npm install @my-school.info/neis-api
```

## API

### Neis

```typescript
import Neis from "@my-school.info/neis-api";
const neis = new Neis({ KEY: "인증키", Type: "json|xml" });
```

```javascript
const Neis = require("@my-school.info/neis-api");
const neis = new Neis({ KEY: "인증키", Type: "json|xml" });
```

---

### (Method) Neis.getSchoolInfo

입력된 데이터를 통해 학교를 검색하고 학교들의 정보를 제공합니다.

| Parameter               | Type               | Required | Description         |
| :---------------------- | :----------------- | :------: | :------------------ |
| args                    | ISchoolInfoRequest |    ✔     |                     |
| args.ATPT_OFCDC_SC_CODE | string             |    ❌    | 시도교육청코드      |
| args.SD_SCHUL_CODE      | string             |    ❌    | 표준학교코드        |
| args.SCHUL_NM           | string             |    ❌    | 학교명              |
| args.SCHUL_KND_SC_NM    | string             |    ❌    | 학교종류명          |
| args.LCTN_SC_NM         | string             |    ❌    | 소재지명            |
| args.FOND_SC_NM         | string             |    ❌    | 설립명              |
| config                  | IConfig            |    ❌    |                     |
| config.pIndex           | number             |    ❌    | 페이지 위치         |
| config.pSize            | number             |    ❌    | 페이지 당 신청 숫자 |

Return `Promise<ISchoolInfoRow[]>`

```typescript
const neis = new Neis();
neis.getSchoolInfo(
	{
		/* args */
	},
	{
		/* config */
	}
);
```

---

### (Method) Neis.getMealInfo

입력된 데이터를 통해 학교의 급식 정보를 제공합니다.

| Parameter               | Type             | Required | Description         |
| :---------------------- | :--------------- | :------: | :------------------ |
| args                    | IMealInfoRequest |    ✔     |                     |
| args.ATPT_OFCDC_SC_CODE | string           |    ✔     | 시도교육청코드      |
| args.SD_SCHUL_CODE      | string           |    ✔     | 표준학교코드        |
| args.MMEAL_SC_CODE      | string           |    ❌    | 식사코드            |
| args.MLSV_YMD           | string           |    ❌    | 급식일자            |
| args.MLSV_FROM_YMD      | string           |    ❌    | 급식시작일자        |
| args.MLSV_TO_YMD        | string           |    ❌    | 급식종료일자        |
| config                  | IConfig          |    ❌    |                     |
| config.pIndex           | number           |    ❌    | 페이지 위치         |
| config.pSize            | number           |    ❌    | 페이지 당 신청 숫자 |

Return `Promise<IMealInfoRow[]>`

```typescript
const neis = new Neis();
neis.getMealInfo(
	{
		/* args */
	},
	{
		/* config */
	}
);
```

---

### (Method) Neis.getClassInfo

입력된 데이터를 통해 학교의 반정보를 제공합니다.

| Parameter               | Type              | Required | Description         |
| :---------------------- | :---------------- | :------: | :------------------ |
| args                    | IClassInfoRequest |    ✔     |                     |
| args.ATPT_OFCDC_SC_CODE | string            |    ✔     | 시도교육청코드      |
| args.SD_SCHUL_CODE      | string            |    ✔     | 표준학교코드        |
| args.AY                 | string            |    ❌    | 학년도              |
| args.GRADE              | string            |    ❌    | 학년                |
| args.DGHT_CRSE_SC_NM    | string            |    ❌    | 주야과정명          |
| args.SCHUL_CRSE_SC_NM   | string            |    ❌    | 학교과정명          |
| args.ORD_SC_NM          | string            |    ❌    | 계열명              |
| args.DDDEP_NM           | string            |    ❌    | 학과명              |
| config                  | IConfig           |    ❌    |                     |
| config.pIndex           | number            |    ❌    | 페이지 위치         |
| config.pSize            | number            |    ❌    | 페이지 당 신청 숫자 |

Return `Promise<IClassInfoRow[]>`

```typescript
const neis = new Neis();
neis.getClassInfo(
	{
		/* args */
	},
	{
		/* config */
	}
);
```

---

### (Method) Neis.getMajorInfo

입력된 데이터를 통해 학교학과정보를 제공합니다

| Parameter               | Type              | Required | Description         |
| :---------------------- | :---------------- | :------: | :------------------ |
| args                    | IMajorInfoRequest |    ✔     |                     |
| args.ATPT_OFCDC_SC_CODE | string            |    ✔     | 시도교육청코드      |
| args.SD_SCHUL_CODE      | string            |    ✔     | 표준학교코드        |
| args.DGHT_CRSE_SC_NM    | string            |    ❌    | 주야과정명          |
| args.ORD_SC_NM          | string            |    ❌    | 계열명              |
| config                  | IConfig           |    ❌    |                     |
| config.pIndex           | number            |    ❌    | 페이지 위치         |
| config.pSize            | number            |    ❌    | 페이지 당 신청 숫자 |

Return `Promise<IMajorInfoRow[]>`

```typescript
const neis = new Neis();
neis.getMajorInfo(
	{
		/* args */
	},
	{
		/* config */
	}
);
```

---

### (Method) Neis.getAflcoInfo

입력된 데이터를 통해 학교계열정보를 제공합니다

| Parameter               | Type              | Required | Description         |
| :---------------------- | :---------------- | :------: | :------------------ |
| args                    | IAflcoInfoRequest |    ✔     |                     |
| args.ATPT_OFCDC_SC_CODE | string            |    ✔     | 시도교육청코드      |
| args.SD_SCHUL_CODE      | string            |    ✔     | 표준학교코드        |
| args.DGHT_CRSE_SC_NM    | string            |    ❌    | 주야과정명          |
| config                  | IConfig           |    ❌    |                     |
| config.pIndex           | number            |    ❌    | 페이지 위치         |
| config.pSize            | number            |    ❌    | 페이지 당 신청 숫자 |

Return `Promise<IAflcoInfoRow[]>`

```typescript
const neis = new Neis();
neis.getAflcoInfo(
	{
		/* args */
	},
	{
		/* config */
	}
);
```

---

### (Method) Neis.getTimeClassroomInfo

입력된 데이터를 통해 시간표강의실정보를 제공합니다

| Parameter               | Type                      | Required | Description         |
| :---------------------- | :------------------------ | :------: | :------------------ |
| args                    | ITimeClassroomInfoRequest |    ✔     |                     |
| args.ATPT_OFCDC_SC_CODE | string                    |    ✔     | 시도교육청코드      |
| args.SD_SCHUL_CODE      | string                    |    ✔     | 표준학교코드        |
| args.AY                 | string                    |    ❌    | 학년도              |
| args.GRADE              | string                    |    ❌    | 학년                |
| args.SEM                | string                    |    ❌    | 학기                |
| args.SCHUL_CRSE_SC_NM   | string                    |    ❌    | 학교과정명          |
| args.DGHT_CRSE_SC_NM    | string                    |    ❌    | 주야과정명          |
| args.ORD_SC_NM          | string                    |    ❌    | 계열명              |
| args.DDDEP_NM           | string                    |    ❌    | 학과명              |
| config                  | IConfig                   |    ❌    |                     |
| config.pIndex           | number                    |    ❌    | 페이지 위치         |
| config.pSize            | number                    |    ❌    | 페이지 당 신청 숫자 |

Return `Promise<ITimeClassroomInfoRow[]>`

```typescript
const neis = new Neis();
neis.getTimeClassroomInfo(
	{
		/* args */
	},
	{
		/* config */
	}
);
```

---

### (Method) Neis.getSchedule

입력된 데이터를 통해 학교학사일정을 제공합니다

| Parameter               | Type             | Required | Description         |
| :---------------------- | :--------------- | :------: | :------------------ |
| args                    | IScheduleRequest |    ✔     |                     |
| args.ATPT_OFCDC_SC_CODE | string           |    ✔     | 시도교육청코드      |
| args.SD_SCHUL_CODE      | string           |    ✔     | 표준학교코드        |
| args.DGHT_CRSE_SC_NM    | string           |    ❌    | 주야과정명          |
| args.SCHUL_CRSE_SC_NM   | string           |    ❌    | 학교과정명          |
| args.AA_YMD             | string           |    ❌    | 학사일자            |
| args.AA_FROM_YMD        | string           |    ❌    | 학사시작일자        |
| args.AA_TO_YMD          | string           |    ❌    | 학사종료일자        |
| config                  | IConfig          |    ❌    |                     |
| config.pIndex           | number           |    ❌    | 페이지 위치         |
| config.pSize            | number           |    ❌    | 페이지 당 신청 숫자 |

Return `Promise<IScheduleRow[]>`

```typescript
const neis = new Neis();
neis.getSchedule(
	{
		/* args */
	},
	{
		/* config */
	}
);
```

---

### (Method) Neis.getTimetable

입력된 데이터를 통해 학교시간표를 제공합니다

| Parameter                     | Type               | Required | Description         |
| :---------------------------- | :----------------- | :------: | :------------------ |
| schoolData                    | ISchoolInfoRequest |    ✔     |                     |
| schoolData.ATPT_OFCDC_SC_CODE | string             |    ❌    | 시도교육청코드      |
| schoolData.SD_SCHUL_CODE      | string             |    ❌    | 표준학교코드        |
| schoolData.SCHUL_NM           | string             |    ❌    | 학교명              |
| schoolData.SCHUL_KND_SC_NM    | string             |    ❌    | 학교종류명          |
| schoolData.LCTN_SC_NM         | string             |    ❌    | 소재지명            |
| schoolData.FOND_SC_NM         | string             |    ❌    | 설립명              |
| args                          | ITimetableRequest  |    ✔     |                     |
| args.ATPT_OFCDC_SC_CODE       | string             |    ❓    | 시도교육청코드      |
| args.SD_SCHUL_CODE            | string             |    ❓    | 표준학교코드        |
| args.AY                       | string             |    ❌    | 학년도              |
| args.SEM                      | string             |    ❌    | 학기                |
| args.ALL_TI_YMD               | string             |    ❌    | 시간표일자          |
| args.DGHT_CRSE_SC_NM          | string             |    ❌    | 주야과정명          |
| args.GRADE                    | string             |    ❌    | 학년                |
| args.CLASS_NM                 | string             |    ❌    | 반명                |
| args.PERIO                    | string             |    ❌    | 교시                |
| args.TI_FROM_YMD              | string             |    ❌    | 시간표시작일자      |
| args.TI_TO_YMD                | string             |    ❌    | 시간표종료일자      |
| config                        | IConfig            |    ❌    |                     |
| config.pIndex                 | number             |    ❌    | 페이지 위치         |
| config.pSize                  | number             |    ❌    | 페이지 당 신청 숫자 |

#### Notification

`args.ATPT_OFCDC_SC_CODE, args.SD_SCHUL_CODE`는 [Neis.getSchoolInfo](<###-(Method)-Neis.getSchoolInfo>) 메소드를 통해 학교 조회 후 조회된 학교의 시도교육청코드, 표준학교코드 값을 전달하여 사용합니다.

---

Return `Promise<ITimetableRow[]>`

```typescript
const neis = new Neis();
neis.getTimetable(
	{
		/* args */
	},
	{
		/* config */
	}
);
```

---

## 예제코드

> 아래 예저는 `한세사이버보안고등학교`를 기준으로 진행되었습니다.

### 학교기본정보 조회

```typescript
const schoolInfo = await neis.getSchoolInfo({ SCHUL_NM: "한세사이버보안고등학교" });
console.log(schoolInfo);

/* Output */
[
	{
		ATPT_OFCDC_SC_CODE: "B10",
		ATPT_OFCDC_SC_NM: "서울특별시교육청",
		SD_SCHUL_CODE: "7010911",
		SCHUL_NM: "한세사이버보안고등학교",
		ENG_SCHUL_NM: "Hansei Cyber Security High School",
		SCHUL_KND_SC_NM: "고등학교",
		LCTN_SC_NM: "서울특별시",
		JU_ORG_NM: "서울특별시교육청",
		FOND_SC_NM: "사립",
		ORG_RDNZC: "04129 ",
		ORG_RDNMA: "서울특별시 마포구 마포대로11길 44-80",
		ORG_RDNDA: "(아현동)",
		ORG_TELNO: "02-362-0130",
		HMPG_ADRES: "http://www.hansei.org",
		COEDU_SC_NM: "남여공학",
		ORG_FAXNO: "02-312-3996",
		HS_SC_NM: "특성화고",
		INDST_SPECL_CCCCL_EXST_YN: "N",
		HS_GNRL_BUSNS_SC_NM: "전문계",
		SPCLY_PURPS_HS_ORD_NM: null,
		ENE_BFE_SEHF_SC_NM: "전기",
		DGHT_SC_NM: "주간",
		FOND_YMD: "19941005",
		FOAS_MEMRD: "19941005",
		LOAD_DTM: "20201210104203",
	},
];
```

#### Response

| Key                       | Type   | Value                  |
| :------------------------ | :----- | :--------------------- |
| ATPT_OFCDC_SC_CODE        | String | 시도교육청코드         |
| ATPT_OFCDC_SC_NM          | String | 시도교육청명           |
| SD_SCHUL_CODE             | String | 표준학교코드           |
| SCHUL_NM                  | String | 학교명                 |
| ENG_SCHUL_NM              | String | 영문학교명             |
| SCHUL_KND_SC_NM           | String | 학교종류명             |
| LCTN_SC_NM                | String | 소재지명               |
| JU_ORG_NM                 | String | 관할조직명             |
| FOND_SC_NM                | String | 설립명                 |
| ORG_RDNZC                 | String | 도로명우편번호         |
| ORG_RDNMA                 | String | 도로명주소             |
| ORG_RDNDA                 | String | 도로명상세주소         |
| ORG_TELNO                 | String | 전화번호               |
| HMPG_ADRES                | String | 홈페이지주소           |
| COEDU_SC_NM               | String | 남녀공학구분명         |
| ORG_FAXNO                 | String | 팩스번호               |
| HS_SC_NM                  | String | 고등학교구분명         |
| INDST_SPECL_CCCCL_EXST_YN | String | 산업체특별학급존재여부 |
| HS_GNRL_BUSNS_SC_NM       | String | 고등학교일반실업구분명 |
| SPCLY_PURPS_HS_ORD_NM     | String | 특수목적고등학교계열명 |
| ENE_BFE_SEHF_SC_NM        | String | 입시전후기구분명       |
| DGHT_SC_NM                | String | 주야구분명             |
| FOND_YMD                  | String | 설립일자               |
| FOAS_MEMRD                | String | 개교기념일             |
| LOAD_DTM                  | String | 적재일시               |

---

### 급식식단정보 조회

```typescript
const school = await neis.getSchoolInfo({ SCHUL_NM: "한세사이버보안고등학교" });
const mealInfo = await neis.getMealInfo({ ATPT_OFCDC_SC_CODE: school[0].ATPT_OFCDC_SC_CODE, SD_SCHUL_CODE: school[0].SD_SCHUL_CODE, MLSV_FROM_YMD: "20210115" });

console.log(mealInfo);

/* Output */
[
	{
		ATPT_OFCDC_SC_CODE: "B10",
		ATPT_OFCDC_SC_NM: "서울특별시교육청",
		SD_SCHUL_CODE: "7010911",
		SCHUL_NM: "한세사이버보안고등학교",
		MMEAL_SC_CODE: "2",
		MMEAL_SC_NM: "중식",
		MLSV_YMD: "20210115",
		MLSV_FGR: "39",
		DDISH_NM: "나물비빔밥/약고추장1.5.6.16.<br/>청국장찌개5.6.9.13.<br/>수제간장치킨13.15.<br/>포기김치9.13.<br/>딸기",
		ORPLC_INFO: "쌀 : 국내산<br/>김치류 : 국내산<br/>고춧가루(김치류) : 국내산<br/>쇠고기(종류) : 국내산(한우)<br/>돼지고기 : 국내산<br/>닭고기 : 국내산<br/>오리고기 : 국내산<br/>쇠고기 식육가공품 : 국내산<br/>돼지고기 식육가공품 : 국내산<br/>닭고기 식육가공품 : 국내산<br/>오리고기 가공품 : 국내산<br/>낙지 : 국내산<br/>고등어 : 국내산<br/>갈치 : 국내산<br/>오징어 : 국내산<br/>꽃게 : 국내산<br/>참조기 : 국내산<br/>콩 : 국내산",
		CAL_INFO: "650.8 Kcal",
		NTR_INFO: "탄수화물(g) : 100.4<br/>단백질(g) : 48.5<br/>지방(g) : 11.6<br/>비타민A(R.E) : 563.1<br/>티아민(mg) : 0.6<br/>리보플라빈(mg) : 0.9<br/>비타민C(mg) : 69.2<br/>칼슘(mg) : 310.1<br/>철분(mg) : 7.6",
		MLSV_FROM_YMD: "20210115",
		MLSV_TO_YMD: "20210115",
	},
];
```

#### Response

| Key                | Type   | Value          |
| :----------------- | :----- | :------------- |
| ATPT_OFCDC_SC_CODE | String | 시도교육청코드 |
| ATPT_OFCDC_SC_NM   | String | 시도교육청명   |
| SD_SCHUL_CODE      | String | 표준학교코드   |
| SCHUL_NM           | String | 학교명         |
| MMEAL_SC_CODE      | String | 식사코드       |
| MMEAL_SC_NM        | String | 식사명         |
| MLSV_YMD           | String | 급식일자       |
| MLSV_FGR           | String | 급식인원수     |
| DDISH_NM           | String | 요리명         |
| ORPLC_INFO         | String | 원산지정보     |
| CAL_INFO           | String | 칼로리정보     |
| NTR_INFO           | String | 영양정보       |
| MLSV_FROM_YMD      | String | 급식시작일자   |
| MLSV_TO_YMD        | String | 급식종료일자   |

---

### 반정보 조회

```typescript
const school = await neis.getSchoolInfo({ SCHUL_NM: "한세사이버보안고등학교" });
const classInfo = await neis.getClassInfo({ ATPT_OFCDC_SC_CODE: school[0].ATPT_OFCDC_SC_CODE, SD_SCHUL_CODE: school[0].SD_SCHUL_CODE, AY: "2021" });

console.log(classInfo);

/* Output */
[
	{
		ATPT_OFCDC_SC_CODE: "B10",
		ATPT_OFCDC_SC_NM: "서울특별시교육청",
		SD_SCHUL_CODE: "7010911",
		SCHUL_NM: "한세사이버보안고등학교",
		AY: "2021",
		GRADE: "1",
		DGHT_CRSE_SC_NM: "주간",
		SCHUL_CRSE_SC_NM: "고등학교",
		ORD_SC_NM: "공업계",
		DDDEP_NM: "해킹보안과정",
		CLASS_NM: "1",
		LOAD_DTM: "20210201003115",
	},
];
```

| Key                | Type   | Value          |
| :----------------- | :----- | :------------- |
| ATPT_OFCDC_SC_CODE | String | 시도교육청코드 |
| ATPT_OFCDC_SC_NM   | String | 시도교육청명   |
| SD_SCHUL_CODE      | String | 표준학교코드   |
| SCHUL_NM           | String | 학교명         |
| AY                 | String | 학년도         |
| GRADE              | String | 학년           |
| DGHT_CRSE_SC_NM    | String | 주야과정명     |
| SCHUL_CRSE_SC_NM   | String | 학교과정명     |
| ORD_SC_NM          | String | 계열명         |
| DDDEP_NM           | String | 학과명         |
| CLASS_NM           | String | 반명           |
| LOAD_DTM           | String | 적재일시       |

---

### 학교학과정보 조회

```typescript
const school = await neis.getSchoolInfo({ SCHUL_NM: "한세사이버보안고등학교" });
const majorInfo = await neis.getMajorInfo({ ATPT_OFCDC_SC_CODE: school[0].ATPT_OFCDC_SC_CODE, SD_SCHUL_CODE: school[0].SD_SCHUL_CODE });

console.log(majorInfo);

/* Output */
[
	{
		ATPT_OFCDC_SC_CODE: "B10",
		ATPT_OFCDC_SC_NM: "서울특별시교육청",
		SD_SCHUL_CODE: "7010911",
		SCHUL_NM: "한세사이버보안고등학교",
		DGHT_CRSE_SC_NM: "주간",
		ORD_SC_NM: "공업계",
		DDDEP_NM: "해킹보안과정",
		LOAD_DTM: "20210201005009",
	},
];
```

| Key                | Type   | Value          |
| :----------------- | :----- | :------------- |
| ATPT_OFCDC_SC_CODE | String | 시도교육청코드 |
| ATPT_OFCDC_SC_NM   | String | 시도교육청명   |
| SD_SCHUL_CODE      | String | 표준학교코드   |
| SCHUL_NM           | String | 학교명         |
| DGHT_CRSE_SC_NM    | String | 주야과정명     |
| ORD_SC_NM          | String | 계열명         |
| DDDEP_NM           | String | 학과명         |
| LOAD_DTM           | String | 적재일시       |

---

### 학교계열정보 조회

```typescript
const school = await neis.getSchoolInfo({ SCHUL_NM: "한세사이버보안고등학교" });
const aflcoInfo = await neis.getAflcoInfo({ ATPT_OFCDC_SC_CODE: school[0].ATPT_OFCDC_SC_CODE, SD_SCHUL_CODE: school[0].SD_SCHUL_CODE });

console.log(aflcoInfo);

/* Output */
[
	{
		ATPT_OFCDC_SC_CODE: "B10",
		ATPT_OFCDC_SC_NM: "서울특별시교육청",
		SD_SCHUL_CODE: "7010911",
		SCHUL_NM: "한세사이버보안고등학교",
		DGHT_CRSE_SC_NM: "야간",
		ORD_SC_NM: "공업계",
		LOAD_DTM: "20210201004009",
	},
	{
		ATPT_OFCDC_SC_CODE: "B10",
		ATPT_OFCDC_SC_NM: "서울특별시교육청",
		SD_SCHUL_CODE: "7010911",
		SCHUL_NM: "한세사이버보안고등학교",
		DGHT_CRSE_SC_NM: "주간",
		ORD_SC_NM: "공업계",
		LOAD_DTM: "20210201004009",
	},
];
```

| Key                | Type   | Value          |
| :----------------- | :----- | :------------- |
| ATPT_OFCDC_SC_CODE | String | 시도교육청코드 |
| ATPT_OFCDC_SC_NM   | String | 시도교육청명   |
| SD_SCHUL_CODE      | String | 표준학교코드   |
| SCHUL_NM           | String | 학교명         |
| DGHT_CRSE_SC_NM    | String | 주야과정명     |
| ORD_SC_NM          | String | 계열명         |
| LOAD_DTM           | String | 적재일시       |

---

### 시간표강의실정보 조회

```typescript
const school = await neis.getSchoolInfo({ SCHUL_NM: "한세사이버보안고등학교" });
const timeClassroomInfo = await neis.getTimeClassroomInfo({ ATPT_OFCDC_SC_CODE: school[0].ATPT_OFCDC_SC_CODE, SD_SCHUL_CODE: school[0].SD_SCHUL_CODE, AY: "2020" });

console.log(timeClassroomInfo);

/* Output */
[
	{
		ATPT_OFCDC_SC_CODE: "B10",
		ATPT_OFCDC_SC_NM: "서울특별시교육청",
		SD_SCHUL_CODE: "7010911",
		SCHUL_NM: "한세사이버보안고등학교",
		AY: "2020",
		GRADE: "1",
		SEM: "1",
		SCHUL_CRSE_SC_NM: "고등학교",
		DGHT_CRSE_SC_NM: "주간",
		ORD_SC_NM: "공업계",
		DDDEP_NM: "게임과",
		CLRM_NM: "1",
		LOAD_DTM: "20210214054224",
	},
];
```

| Key                | Type   | Value          |
| :----------------- | :----- | :------------- |
| ATPT_OFCDC_SC_CODE | String | 시도교육청코드 |
| ATPT_OFCDC_SC_NM   | String | 시도교육청명   |
| SD_SCHUL_CODE      | String | 표준학교코드   |
| SCHUL_NM           | String | 학교명         |
| AY                 | String | 학년도         |
| GRADE              | String | 학년           |
| SEM                | String | 학기           |
| SCHUL_CRSE_SC_NM   | String | 학교과정명     |
| DGHT_CRSE_SC_NM    | String | 주야과정명     |
| ORD_SC_NM          | String | 계열명         |
| DDDEP_NM           | String | 학과명         |
| CLRM_NM            | String | 강의실명       |
| LOAD_DTM           | String | 적재일시       |

---

### 학교학사일정 조회

```typescript
const school = await neis.getSchoolInfo({ SCHUL_NM: "한세사이버보안고등학교" });
const schedule = await neis.getSchedule({ ATPT_OFCDC_SC_CODE: school[0].ATPT_OFCDC_SC_CODE, SD_SCHUL_CODE: school[0].SD_SCHUL_CODE, AA_FROM_YMD: "20210101" });

console.log(schedule);

/* Output */
[
	{
		ATPT_OFCDC_SC_CODE: "B10",
		ATPT_OFCDC_SC_NM: "서울특별시교육청",
		SD_SCHUL_CODE: "7010911",
		SCHUL_NM: "한세사이버보안고등학교",
		AY: "2020",
		DGHT_CRSE_SC_NM: "주간",
		SCHUL_CRSE_SC_NM: "고등학교",
		SBTR_DD_SC_NM: "휴업일",
		AA_YMD: "20210227",
		EVENT_NM: "토요휴업일",
		EVENT_CNTNT: null,
		ONE_GRADE_EVENT_YN: "Y",
		TW_GRADE_EVENT_YN: "Y",
		THREE_GRADE_EVENT_YN: "Y",
		FR_GRADE_EVENT_YN: "*",
		FIV_GRADE_EVENT_YN: "*",
		SIX_GRADE_EVENT_YN: "*",
		LOAD_DTM: "20210215004607",
	},
];
```

| Key                  | Type   | Value          |
| :------------------- | :----- | :------------- |
| ATPT_OFCDC_SC_CODE   | String | 시도교육청코드 |
| ATPT_OFCDC_SC_NM     | String | 시도교육청명   |
| SD_SCHUL_CODE        | String | 표준학교코드   |
| SCHUL_NM             | String | 학교명         |
| AY                   | String | 학년도         |
| DGHT_CRSE_SC_NM      | String | 주야과정명     |
| SCHUL_CRSE_SC_NM     | String | 학교과정명     |
| SBTR_DD_SC_NM        | String | 수업공제일명   |
| AA_YMD               | String | 학사일자       |
| EVENT_NM             | String | 행사명         |
| EVENT_CNTNT          | String | 행사내용       |
| ONE_GRADE_EVENT_YN   | String | 1학년행사여부  |
| TW_GRADE_EVENT_YN    | String | 2학년행사여부  |
| THREE_GRADE_EVENT_YN | String | 3학년행사여부  |
| FR_GRADE_EVENT_YN    | String | 4학년행사여부  |
| FIV_GRADE_EVENT_YN   | String | 5학년행사여부  |
| SIX_GRADE_EVENT_YN   | String | 6학년행사여부  |
| LOAD_DTM             | String | 적재일시       |

---

### 학교시간표 조회

```typescript
const school = await neis.getSchoolInfo({ SCHUL_NM: "한세사이버보안고등학교" });
const timetable = await neis.getTimetable({ ATPT_OFCDC_SC_CODE: school[0].ATPT_OFCDC_SC_CODE, SD_SCHUL_CODE: school[0].SD_SCHUL_CODE }, { AY: "2020", SEM: "2" });

console.log(timetable);

/* Output */
[
	{
		ATPT_OFCDC_SC_CODE: "B10",
		ATPT_OFCDC_SC_NM: "서울특별시교육청",
		SD_SCHUL_CODE: "7010911",
		SCHUL_NM: "한세사이버보안고등학교",
		AY: "2020",
		SEM: "2",
		ALL_TI_YMD: "20200902",
		DGHT_CRSE_SC_NM: "주간",
		ORD_SC_NM: "공업계",
		DDDEP_NM: "정보보안과정",
		GRADE: "1",
		CLRM_NM: "2",
		CLASS_NM: "2",
		PERIO: "5",
		ITRT_CNTNT: "통합사회",
		LOAD_DTM: "20200906042101",
	},
];
```

| Key                | Type   | Value          |
| :----------------- | :----- | :------------- |
| ATPT_OFCDC_SC_CODE | String | 시도교육청코드 |
| ATPT_OFCDC_SC_NM   | String | 시도교육청명   |
| SD_SCHUL_CODE      | String | 표준학교코드   |
| SCHUL_NM           | String | 학교명         |
| AY                 | String | 학년도         |
| SEM                | String | 학기           |
| ALL_TI_YMD         | String | 시간표일자     |
| DGHT_CRSE_SC_NM    | String | 주야과정명     |
| GRADE              | String | 학년           |
| CLASS_NM           | String | 반명           |
| PERIO              | String | 교시           |
| ITRT_CNTNT         | String | 수업내용       |
| LOAD_DTM           | String | 적재일시       |

---

## 오류, 문제 신고

오류 제보 및 PR은 매우 환영입니다!

## 업데이트

- `1.0.0` - 첫번재 릴리즈
