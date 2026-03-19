// --- КОДЫН ЭХЛЭЛ ---
/****************************************************************************************
 * PRODUCT: LOVE NUMEROLOGY REPORT GENERATOR (ZAYANII HANI - 1 PERSON)
 * VERSION: v26.4 - UChat Only (Robust Core Engine, Auto-Retry Fixed, Strict Fallback & Safety)
 * AUTHOR: Jules + Codex
 * MODEL: gemini-2.5-flash
 * PERSONA: 50-year-old mystical Mongolian shaman woman, old Mongolian words ONLY.
 ****************************************************************************************/

const CONFIG = {
  // --- SYSTEM CONFIGURATION ---
  VERSION: "v26.4-Zayanii-Hani-Strict-Core",
  PRODUCT_NAME: "Заяаны Ханийн Зурхай: Далд Увдис",
  SHEET_NAME: "Sheet1",
  BATCH_SIZE: 3,
  GEMINI_MODEL: "gemini-2.5-flash",
  TEMPERATURE: 0.55, // Increased temperature for much longer, richer, and native storytelling.

  // --- COLUMN MAPPING (0-based Index) ---
  COLUMNS: {
    NAME: 0,      // A: User Name
    ID: 1,        // B: UChat subscriber_id
    INPUT: 2,     // C: Raw Input String
    PDF: 3,       // D: Output PDF URL
    STATUS: 4,    // E: Processing Status
    TOKEN: 5,     // F: Token Usage (Total)
    DEBUG: 6,     // G: Debug Data (JSON)
    DATE: 7,      // H: Timestamp
    VER: 8,       // I: Version Tag
    ERROR: 9      // J: Error Message
  },

  UCHAT: {
    ENDPOINT: "https://www.uchat.com.au/api/subscriber/send-content",
    DELIVERY_MESSAGE: `Сайн байна уу, {{NAME}}? 🔮\n\nТаны "Заяаны Ханийн Зурхай: Далд Увдис" тайлан бэлэн боллоо.\n\nДоорх товч дээр дарж татаж авна уу. 👇`,
    DELIVERY_BTN_TEXT: "📥 Тайлан татах"
  },

  // ==================================================================================
  // 📜 GOLD STANDARD REFERENCE (SHAMAN PERSONA - OLD MONGOLIAN WORDS)
  // ==================================================================================
  REFERENCES: {
    PART_1: `Нэгдүгээр бүлэг. СЭТГЭЛИЙН УГСУУР: Хайрын Зөн Ба Увдис
🔮 Таны төрсөн өдрийн мөрөөр хөөж үзвээс, таны сэтгэлийн гүнд [АМЬДРАЛЫН_ЗАМЫН_ТОО] хэмээх увдист тоо оршиж байна. Энэ нь таныг [АМЬДРАЛЫН_ЗАМЫН_ТӨРӨЛ] болохыг илтгэнэ.
Тоон увдисын тайлал
Таны Пифагорын хүснэгтэд [ИЛҮҮДЭЛ_ТООНУУД] гэсэн хүчирхэг тоонууд буужээ.
👑 [ИЛҮҮДЭЛ_ТОО_1] нь танд төрөлхийн онцгой чанарыг өгсөн хэдий ч, хайр дурлалын замд энэхүү хүч хэтэрвээс ханиа дарж мэднэ. Тиймээс та энэ хүчээ дотроо номхотгож сурах хэрэгтэй.
🧠 [ИЛҮҮДЭЛ_ТОО_2] эрчим нь таныг маш хурц ухаантай болгодог боловч, өнгөрснийг мартаж чадахгүй сэтгэлээ зовоох аюултай.
Сэтгэлийн Хэл
🗣️ Таны төрсөн өдөр [ӨДРИЙН_ТОО]-ийн эрчимтэй байгаа нь таны хайрын хэл [ХАЙРЫН_ХЭЛ] гэдгийг зааж байна. Танд алт мөнгө бус, чин сэтгэлийн хүүрнэл чухал.`,

    PART_2: `Хоёрдугаар бүлэг. ГАНЦААРДЛЫН ҮНДЭС: Үйлийн Үр Ба Цоорхой
🚧 Үйлийн үрийн өр
Таны мөрөнд [КАРМЫН_ӨР] хэмээх хүнд үйлийн үрийн тоо гарсангүй нь Цагаан мөртэй явааг тань илтгэнэ. Танд өнгөрсөн наснаас тээж ирсэн хайрын хар нүгэл үгүй тул одоогийн ганцаардал тань зөвхөн таны өөрийн сонголт бөлгөө.
🕳️ Эрчмийн цоорхой
Таны хүснэгтэд [ДУТУУ_ТООНУУД] дутаж байна. [ДУТУУ_ТОО_1] дутсан нь таныг өөрийгөө умартан бусдыг хэт халамжлах эсвэл өөрийгөө дорд үзэх байдалд хүргэнэ.
🔒 Сэтгэлийн чөдөр
Таны [АМЬДРАЛЫН_ЗАМЫН_ТОО]-ийн увдис болон бусад эрчим нийлж, ирээдүйн ханиа хэт өндөр шалгуураар хэмжих чөдрийг үүсгэжээ.
⚠️ Сэрэмжлэх Эрчим
Таны хувьд хэт захирангуй хүн, салхи шиг тогтворгүй хүн хамгийн хортой тул ийм хүмүүсээс сэтгэлээ хол байлга.`,

    PART_3: `Гуравдугаар бүлэг. ЗАЯАНЫ ХАНИЙН ДҮР: Тэнгэрээс Зурсан Зураг
💎 Зан араншин
Танд догшин салхи шиг хүн бус, таны дотоод шуургыг намжаах "Дөлгөөн халамжлагч" заяагджээ. Тэрбээр олны дунд чимээгүй хэрнээ гүн гүнзгий ухаантай, таны ачааг хөнгөлөх түшиг тулгуур байх болно.
💼 Үйл хэрэг ба Зэрэг зиндаа
Тэр хүн мөнгөний хойноос хөөцөлдөгч бус, бусдын тусын тулд хөдөлмөрлөдөг оюунлаг (эмч, багш, инженер) нэгэн байх ба амьдралын тэнцвэрийг эрхэмлэгч байна.
🔢 Ээлтэй өдрүүд
Танд хамгийн ээлтэй бөгөөд дутууг тань нөхөх хүмүүс бол сарын [ТОХИРОХ_ӨДРҮҮД_ЖАГСААЛТ]-нд төрсөн сүнсний ихрүүд байх магадлалтай.
✨ Гадаад дүр төрх
Тэрбээр хурц ширүүн бус, зөөлөн дулаан харцтай, цэвэрч нямбай хүн байх бөгөөд анх харахад л эртний танил шиг дотно санагдах болно.`,

    PART_4: `Дөрөвдүгээр бүлэг. ХУВЬ ЗОРИЛГЫН ГУРВАН ЖИЛ: Цагийн Хүрд
⏳ [ИРЭЭДҮЙН_ОН_1] он: Үр шимийн хураагуур
Энэ онд та хүчирхэг эрчимд орох бөгөөд өнгөрсөн хугацааны тэвчээрийн үр шимийг хүртэж, нийгэмд байр суурьтай хүчирхэг хүнтэй учрах хувьтай. Хавар, намрын саруудад олон нийтийн газар идэвхтэй бай.
🧹 [ИРЭЭДҮЙН_ОН_2] он: Ариуслын мөчлөг
Энэ бол хуучин бүхнээ цэвэрлэж, өнгөрснийг бүрмөсөн тавьж явуулах жил. Энэ жил бүх эргэлзээгээ тайлж, сэтгэлээ бүрэн цэвэрлэнэ.
💒 [ИРЭЭДҮЙН_ОН_3] он: Шинэ гал голомт
Энэ нь гэр бүл зохиох, шинэ амьдралын үүд нээхэд хамгийн ээлтэй цаг хугацаа байна. Өмнө нь эхэлсэн харилцаа энэ онд бат бөх голомт болон бадарна.
📍 Учрах магадлалтай газар
Таны увдислаг чанар чимээ шуугиантай газар хаагддаг тул номын сан, үзэсгэлэн, сургалт зэрэг оюунлаг орчинд ирээдүйн ханиа олох магадлалтай.`,

    PART_5: `Тавдугаар бүлэг. АМЖИЛТЫН ТҮЛХҮҮР: Далд Увдисын Дом
🔑 Зөөлрөхүйн ухаан
Та өөрийн 1111 буюу хүчирхэг удирдагч чанараа номхотгож, харилцаанд зөөлөн ус мэт байх ухаанд суралц. Хэт их бодлоо тархинаасаа чөлөөлж бясалгал үйлдэх нь таны сэтгэлийг амирлуулах болно.
🧘 Өглөөний тарни
"Би өнгөрсний гомдлыг салхинд хийсгэлээ, одоо шинэ хайрыг тосож авахад бэлэн."
"Би хайрлагдах эрхтэй, халамжлуулахын тулд зөөлөн байхыг өөртөө зөвшөөрч байна."
🎨 Ээлтэй өнгө ба чулуу
Таны далд увдисыг хамгаалах өнгө бол "Мөнгөлөг цагаан", "Усан цэнхэр", "Нил ягаан". Азын чулуу тань "Сарны чулуу", "Аметист" бөгөөд эдгээр нь таны эрчмийг цэвэрлэж, нойрыг тань амраана.
📜 Төгсгөлийн үг
Та бол жирийн нэгэн бус, гүнзгий увдистай сүнс юм. Таны замд саад болж буй зүйлс таны л шалгуур байсан. Одоо ухаанаа амрааж, зүрхээ нээвэл 2026 оны хувь заяаны бэлэг таныг хүлээж байна.`
  },

  NUMEROLOGY: {
    LIFE_PATH_MAP: {
      1: { name: "Бие даасан манлайлагч", desc: "Хайранд хүчтэй байр суурьтай, шийдвэр гаргагч." },
      2: { name: "Сэтгэл холбооны бүтээгч", desc: "Гүн ойлголцол, хамт амьдрах зохицолд төвлөрдөг." },
      3: { name: "Илэрхийллийн хайрлагч", desc: "Ярилцлага, урам, сэтгэлээ ил гаргах нь чухал." },
      4: { name: "Тогтвортой суурь бүтээгч", desc: "Харилцаанд найдвартай, бүтэцтэй орон зай шаарддаг." },
      5: { name: "Өөрчлөлтийн эрэлчин", desc: "Эрч хүчтэй, эрх чөлөөтэй харилцааг илүүд үздэг." },
      6: { name: "Гэр бүлсэг халамжлагч", desc: "Халамж, хамгаалалт, гэр бүлийн дулаан эрчимтэй." },
      7: { name: "Дотоод ертөнцийн шинжээч", desc: "Сэтгэлээ нээхэд хугацаа хэрэгтэй, гүн холбоо хайдаг." },
      8: { name: "Хил хязгаарын эзэн", desc: "Үнэ цэнэ, хүндлэл, бодит үр дүнг чухалчилдаг." },
      9: { name: "Өндөр мэдрэмжит өгөөмөр", desc: "Том сэтгэлтэй ч сэтгэл хөдлөлийн хамгаалалт хэрэгтэй." },
      11: { name: "Зөн совинтой хайрлагч", desc: "Сэтгэлийн гүн холбоо, үггүй ойлголцлыг хайдаг мастер код." },
      22: { name: "Амьдралын түншлэл бүтээгч", desc: "Хамтын амьдралыг бодитоор босгох чадвартай." },
      33: { name: "Сэтгэл эмчлэгч", desc: "Хайрыг халамж ба утгатай амьдрал болгон хувиргадаг." }
    },
    MATRIX_EXCESS_MAP: {
      1: { title: "Манлайллын хэт хүч", desc: "Харилцаанд хэт хяналт тогтоох эрсдэлтэй." },
      2: { title: "Мэдрэмжийн ачаалал", desc: "Бусдын сэтгэл хөдлөлийг өөртөө хэт наах хандлагатай." },
      3: { title: "Илэрхийллийн хэт ачаалал", desc: "Сэтгэлээ олон сувгаар тарааж, тогтворгүйдэх эрсдэлтэй." },
      4: { title: "Хатуу хяналт", desc: "Уян хатан байдлыг багасгаж, харилцааг чангалж болзошгүй." },
      5: { title: "Тогтворгүй эрчим", desc: "Шинэ мэдрэмж хөөхөөс болж харилцаа тогтворгүйдэх магадлалтай." },
      6: { title: "Өөрийгөө золиослох", desc: "Хэт халамжлаад өөрийн орон зайгаа алдах эрсдэлтэй." },
      7: { title: "Дотогш хаагдах", desc: "Сэтгэлээ дотроо хадгалж, ойлголцлыг таслах магадлалтай." },
      8: { title: "Хатуу шаардлага", desc: "Хил хязгаар зөв ч хэт хатуу бол хайр хөрнө." },
      9: { title: "Өнгөрсөнд гацах", desc: "Дурсамж, гомдол удаан хадгалах эрсдэлтэй." }
    },
    MISSING_NUMBER_MAP: {
      1: { title: "Өөрийгөө илэрхийлэх цоорхой", risk: "Хүсэл хэрэгцээгээ тод хэлж чадалгүй буруу ойлголцол үүсгэх." },
      2: { title: "Ойлголцлын цоорхой", risk: "Хосын нарийн мэдрэмжийг ойлгоход саадтай." },
      3: { title: "Ярианы цоорхой", risk: "Ярилцлага дутагдаж сэтгэл холдох." },
      4: { title: "Тогтвортой байдлын цоорхой", risk: "Харилцааны дэг, тууштай байдал сулрах." },
      5: { title: "Уян хатан байдлын цоорхой", risk: "Өөрчлөлтөд хатуу хандаж мөргөлдөөн үүсгэх." },
      6: { title: "Үнэ цэнийн цоорхой", risk: "Өөрийгөө голж, хэт хамааралтай болох." },
      7: { title: "Итгэлцлийн цоорхой", risk: "Сэжиг нэмэгдэж, сэтгэлийн зай холдох." },
      8: { title: "Хил хязгаарын цоорхой", risk: "Үгүй гэж хэлж чадахгүй, ашиглуулах эрсдэлтэй." },
      9: { title: "Өнгөрснөө тавих цоорхой", risk: "Шарх гомдлоо удаан тээж шинэ харилцаа хаах." }
    },
    PERSONAL_YEAR_MAP: {
      1: { title: "Шинэ эхлэл" },
      2: { title: "Харилцан ойлголцол" },
      3: { title: "Нээлттэй илэрхийлэл" },
      4: { title: "Суурь ба тогтвортой байдал" },
      5: { title: "Өөрчлөлт ба хөдөлгөөн" },
      6: { title: "Хариуцлага ба халамж" },
      7: { title: "Дотоод цэвэрлэгээ" },
      8: { title: "Үр дүн ба статустай учрал" },
      9: { title: "Төгсгөл ба салалт/цэвэрлэгээ" }
    },
    RISK_DAY_GROUPS: {
      control: [8, 17, 26],
      unstable: [5, 14, 23],
      cold: [7, 16, 25]
    },
    LUCKY_ITEM_MAP: {
      1: { color: "Алтлаг, Улаан", stone: "Рубин" },
      2: { color: "Мөнгөлөг цагаан", stone: "Сарны чулуу" },
      3: { color: "Шар, Цайвар ягаан", stone: "Цитрин" },
      4: { color: "Хөх, Саарал", stone: "Лазурит" },
      5: { color: "Ногоон, Оюу", stone: "Маргад" },
      6: { color: "Ягаан, Цагаан", stone: "Сарны чулуу" },
      7: { color: "Гүн хөх, Нил ягаан", stone: "Аметист" },
      8: { color: "Хар, Хар хөх", stone: "Обсидиан" },
      9: { color: "Нил ягаан", stone: "Аметист" },
      11: { color: "Мөнгөлөг цагаан, Усан цэнхэр, Нил ягаан", stone: "Сарны чулуу, Аметист" },
      22: { color: "Ногоон, Алтлаг", stone: "Хаш" },
      33: { color: "Цэнхэр, Цагаан", stone: "Ларимар" }
    },
    LUCKY_NUMBERS_MAP: {
      1: [1, 10, 19, 28],
      2: [2, 11, 20, 29],
      3: [3, 12, 21, 30],
      4: [4, 13, 22, 31],
      5: [5, 14, 23],
      6: [6, 15, 24],
      7: [7, 16, 25],
      8: [8, 17, 26],
      9: [9, 18, 27],
      11: [1, 10, 11, 19, 20, 28, 29],
      22: [2, 4, 8, 11, 20],
      33: [3, 6, 9, 12, 21]
    }
  }
};

function getProperty(key) {
  const val = PropertiesService.getScriptProperties().getProperty(key);
  if (!val) throw new Error(`MISSING SCRIPT PROPERTY: ${key}`);
  return val;
}

// ==========================================
// 🚀 ROBUST MAIN ENGINE (AUTO-HEALING & TIME LIMIT SAFEGUARD)
// ==========================================
function main() {
  const START_TIME = new Date().getTime();
  const TIME_LIMIT_MS = 5 * 60 * 1000; // 5.0 minutes

  const lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) return;

  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.SHEET_NAME);
    const rows = sheet.getDataRange().getValues();
    let processedCount = 0;

    const KEYS = {
      GEMINI: getProperty("GEMINI_API_KEY"),
      TEMPLATE: getProperty("TEMPLATE_ID"),
      UCHAT: getProperty("UCHAT_API_KEY"),
      FOLDER: getProperty("FOLDER_ID")
    };

    const COLS = CONFIG.COLUMNS;

    for (let i = 1; i < rows.length; i++) {
      if (processedCount >= CONFIG.BATCH_SIZE) break;

      if (new Date().getTime() - START_TIME > TIME_LIMIT_MS) {
        console.warn("Time limit approaching. Stopping early to prevent Google Apps Script timeout.");
        break;
      }

      const row = rows[i];
      const name = String(row[COLS.NAME] || "Эрхэм");
      const contactID = row[COLS.ID];
      const inputData = String(row[COLS.INPUT]);
      const status = String(row[COLS.STATUS] || "");
      const rawDate = row[COLS.DATE];

      const pdfCell = sheet.getRange(i + 1, COLS.PDF + 1);
      const statusCell = sheet.getRange(i + 1, COLS.STATUS + 1);
      const errorCell = sheet.getRange(i + 1, COLS.ERROR + 1);
      const tokenCell = sheet.getRange(i + 1, COLS.TOKEN + 1);
      const debugCell = sheet.getRange(i + 1, COLS.DEBUG + 1);
      const dateCell = sheet.getRange(i + 1, COLS.DATE + 1);
      const verCell = sheet.getRange(i + 1, COLS.VER + 1);

      if (!inputData) continue;
      if (status === "АМЖИЛТТАЙ" || status.includes("ХЯНАХ ШААРДЛАГАТАЙ") || status.includes("24 цаг хэтэрсэн")) continue;

      let isRetry = false;
      if (status === "Боловсруулж байна...") {
        const parsedDate = new Date(rawDate);
        if (!isNaN(parsedDate.getTime())) {
          const nowMs = new Date().getTime();
          const startMs = parsedDate.getTime();
          const diffMinutes = (nowMs - startMs) / (1000 * 60);

          if (diffMinutes > 15) {
             isRetry = true;
          } else {
             continue;
          }
        } else {
           continue;
        }
      }

      statusCell.setValue("Боловсруулж байна...");
      const startTime = new Date();
      dateCell.setValue(Utilities.formatDate(startTime, Session.getScriptTimeZone(), "yyyy-MM-dd HH:mm"));
      SpreadsheetApp.flush();

      try {
        console.log(`Processing Zayanii Hani logic for user...`);

        // 1. DATA PREP: AI PARSING (1 person)
        const profileData = parseAndCalculateProfile(inputData, KEYS.GEMINI);

        // 2. GENERATE REPORT (The Voice) - Split Calls 5 times
        const reportResult = generateSequentialReport(profileData, KEYS.GEMINI);

        // 3. SAFE PDF DELIVERY ENGINE
        const pdfData = createPdfSafely(name, reportResult.text, KEYS.TEMPLATE, KEYS.FOLDER);

        try {
            sendUChatProven(contactID, pdfData.url, name, KEYS.UCHAT);
        } catch (deliveryErr) {
            // P1 FIX: Cleanup PDF if delivery fails to prevent public leak
            try {
                DriveApp.getFileById(pdfData.fileId).setTrashed(true);
            } catch (cleanupErr) {
                console.warn("Failed to trash PDF after delivery error:", cleanupErr);
            }
            throw deliveryErr;
        }

        const totalTokens = (profileData.parsingUsage || 0) + reportResult.usage;
        const now = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "yyyy-MM-dd HH:mm");

        pdfCell.setValue(pdfData.url);
        statusCell.setValue("АМЖИЛТТАЙ");
        tokenCell.setValue(totalTokens);
        debugCell.setValue(JSON.stringify(profileData));
        dateCell.setValue(now);
        verCell.setValue(CONFIG.VERSION);
        errorCell.setValue("");

        processedCount++;

      } catch (err) {
        let errorMsgStr = err.toString();
        let mongolianError = "Системийн алдаа: " + errorMsgStr;

        if (errorMsgStr.includes("24H_LIMIT") || errorMsgStr.includes("window")) {
            mongolianError = "Фэйсбүүк 24 цаг хэтэрсэн тул мессеж явуулах эрх хаагдсан байна.";
            statusCell.setValue("24 цаг хэтэрсэн");
            errorCell.setValue(mongolianError);
            continue;
        } else if (errorMsgStr.includes("Gemini") || errorMsgStr.includes("JSON Parse") || errorMsgStr.includes("AI")) {
            mongolianError = "AI (Gemini) хариу өгсөнгүй эсвэл түр зуур хэт ачаалалтай байна.";
        } else if (errorMsgStr.includes("UChat token") || errorMsgStr.includes("user_ns")) {
            mongolianError = "UChat тохиргоо эсвэл харилцагчийн код буруу байна.";
        } else if (errorMsgStr.includes("Drive")) {
            mongolianError = "Google Drive лимит хэтэрсэн эсвэл ID буруу байна.";
        }

        console.error(`Error: ${errorMsgStr}`);
        errorCell.setValue(mongolianError);

        if (isRetry || status === "") {
             statusCell.setValue("Дахин оролдож байна (1)");
        } else if (status === "Дахин оролдож байна (1)") {
             statusCell.setValue("Дахин оролдож байна (2)");
        } else if (status === "Дахин оролдож байна (2)") {
             statusCell.setValue("ХЯНАХ ШААРДЛАГАТАЙ");
        } else {
             statusCell.setValue("Дахин оролдож байна (1)");
        }
      }
    }
  } finally {
    lock.releaseLock();
  }
}

// ==========================================
// 1. DATA PREPARATION (Numerology Logic for 1 Person)
// ==========================================

function isValidDate(y, m, d) {
  const year = parseInt(y, 10);
  const month = parseInt(m, 10);
  const day = parseInt(d, 10);
  if (isNaN(year) || isNaN(month) || isNaN(day)) return false;
  if (year < 1900 || year > 2100) return false;
  if (month < 1 || month > 12) return false;
  if (day < 1 || day > 31) return false;

  const dateObj = new Date(year, month - 1, day);
  return dateObj.getFullYear() === year && dateObj.getMonth() === month - 1 && dateObj.getDate() === day;
}

function sumDigits(n) {
  return String(Math.abs(Number(n))).split("").reduce((a, b) => a + Number(b), 0);
}

function reduceNumber(n, keepMaster) {
  let v = Number(n);
  while (v > 9) {
    if (keepMaster && (v === 11 || v === 22 || v === 33)) break;
    v = sumDigits(v);
  }
  return v;
}

function calculateLifePath(y, m, d) {
  const yR = reduceNumber(y, true);
  const mR = reduceNumber(m, true);
  const dR = reduceNumber(d, true);
  const totalRaw = yR + mR + dR;
  const total = reduceNumber(totalRaw, true);
  return {
    number: total,
    rawSums: [dR, totalRaw]
  };
}

function calculatePythagorasMatrix(y, m, d) {
  const dateStr = `${y}${String(m).padStart(2, "0")}${String(d).padStart(2, "0")}`;
  const dateDigits = dateStr.split("").map(Number);
  const n1 = dateDigits.reduce((a, b) => a + b, 0);
  const n2 = sumDigits(n1);
  const firstDigit = Number(String(d)[0]);
  const n3 = n1 - (2 * firstDigit);
  const n4 = sumDigits(Math.abs(n3));

  const allNums = [...dateDigits];
  String(n1).split("").forEach(c => allNums.push(Number(c)));
  String(n2).split("").forEach(c => allNums.push(Number(c)));
  String(Math.abs(n3)).split("").forEach(c => allNums.push(Number(c)));
  String(n4).split("").forEach(c => allNums.push(Number(c)));

  const counts = {};
  for (let i = 1; i <= 9; i++) counts[i] = 0;
  allNums.forEach(n => {
    if (counts[n] !== undefined) counts[n]++;
  });

  return { counts };
}

function checkKarmicDebt(day, rawSums) {
  const pool = [Number(day)].concat((rawSums || []).map(Number));
  const debts = [13, 14, 16, 19].filter(n => pool.indexOf(n) !== -1);
  return debts.length ? debts.join(", ") : "Илрээгүй";
}

function calculatePersonalYear(month, day, year) {
  const md = reduceNumber(Number(month) + Number(day), false);
  const yy = reduceNumber(Number(year), false);
  return reduceNumber(md + yy, false);
}

function calculatePersonalYearForecast(month, day, startYear, span) {
  const out = [];
  for (let i = 0; i < span; i++) {
    const y = Number(startYear) + i;
    const n = calculatePersonalYear(month, day, y);
    const title = (CONFIG.NUMEROLOGY.PERSONAL_YEAR_MAP[n] || { title: "Мөчлөг" }).title;
    out.push(`${y} он -> Хувийн жил ${n} (${title})`);
  }
  return out.join("; ");
}

function buildCompatibilityNumbers(lifePathNumber, missingNumbers) {
  const missSet = {};
  (missingNumbers || []).forEach(item => {
    const n = Number(item && item.number);
    if (n >= 1 && n <= 9) missSet[n] = true;
  });

  const picks = [];
  if (missSet[6]) picks.push(6, 15, 24);
  // Remove 8, 17, 26 from compatibility picks to avoid contradiction with danger energies.
  // if (missSet[8]) picks.push(8, 17, 26);
  if (lifePathNumber === 11 || lifePathNumber === 2) picks.push(2, 11, 20, 29);
  if (!picks.length) picks.push(2, 6, 11, 20, 24, 29);

  const dangerDays = [8, 17, 26, 5, 14, 23, 7, 16, 25];
  const seen = {};

  const finalPicks = picks.filter(x => {
    if (seen[x]) return false;
    if (dangerDays.includes(x)) return false; // Strict filter to avoid contradicting danger energies
    seen[x] = true;
    return true;
  });

  // Fallback if all picks were somehow danger days
  if (!finalPicks.length) return "2, 6, 11, 20, 24, 29";
  return finalPicks.join(", ");
}

function normalizeInputWithAI(raw, key) {
  const prompt = `
  TASK: Normalize this person's data.
  INPUT: "${raw}"

  INSTRUCTIONS:
  1. Extract Gender (M/F). Return "Эрэгтэй" or "Эмэгтэй". Default "Эмэгтэй" if unknown.
  2. Extract DOB (YYYY.MM.DD). MUST be extracted correctly.
  3. Use "Name" if present, else "Эрхэм".

  RETURN JSON ONLY: {"gender": "Эрэгтэй", "dob": "YYYY.MM.DD", "name": "Name"}
  `;
  let result;
  try {
    result = callGeminiAPI(prompt, key, 0.1, true);
  } catch (e) {
    throw new Error("Өгөгдлийг (Он сар өдөр) таних боломжгүй байна, зөвхөн огноо эсвэл хүйсийг тодорхой бичнэ үү.");
  }

  let data = {};
  try {
    data = JSON.parse(result.text.trim());
  } catch (e) {
    // If Gemini fails to return valid JSON
  }

  // Fallback to regex if Gemini JSON failed, but NEVER fake the date.
  if (!data.dob) {
    const dates = String(raw).match(/\d{4}[\.\-\s\/]\d{1,2}[\.\-\s\/]\d{1,2}/g);
    if (dates && dates.length > 0) {
      data.dob = dates[0].replace(/[\s\-\/]/g, ".");
    } else {
      throw new Error("Өгөгдлийг (Он сар өдөр) таних боломжгүй байна, зөвхөн огноо эсвэл хүйсийг тодорхой бичнэ үү.");
    }
  }

  // P1 FIX: Validate if the extracted date is a real calendar date (No 1990.13.40 or 2024.02.31)
  const dateParts = data.dob.split(".");
  if (dateParts.length !== 3 || !isValidDate(dateParts[0], dateParts[1], dateParts[2])) {
     throw new Error(`Таны оруулсан огноо хуанлид байхгүй боломжгүй огноо байна: ${data.dob}`);
  }

  // P2 FIX: Do NOT silently default to "Эмэгтэй". Throw manual review error if gender is ambiguous.
  let gender = null;
  let rawG = (data.gender || String(raw)).toLowerCase();
  if (rawG.includes("эр") || rawG === "male" || rawG === "man") gender = "Эрэгтэй";
  else if (rawG.includes("эм") || rawG === "female" || rawG === "woman") gender = "Эмэгтэй";

  if (!gender) {
     throw new Error("Хүйс тодорхойгүй байна. 'Эрэгтэй' эсвэл 'Эмэгтэй' болохыг тодорхой бичнэ үү.");
  }

  return {
    dob: data.dob,
    gender: gender,
    name: data.name || "Эрхэм",
    usage: result.usage || 0
  };
}

function parseAndCalculateProfile(rawInput, apiKey) {
  const normalized = normalizeInputWithAI(rawInput, apiKey);
  const parts = normalized.dob.split(/[.\-\/]/).map(Number);
  const year = parts[0];
  const month = parts[1];
  const day = parts[2];

  const lifePath = calculateLifePath(year, month, day);
  const lifePathInfo = CONFIG.NUMEROLOGY.LIFE_PATH_MAP[lifePath.number] || CONFIG.NUMEROLOGY.LIFE_PATH_MAP[1];
  const dayNumber = reduceNumber(day, false);
  const matrix = calculatePythagorasMatrix(year, month, day);
  const karmicDebt = checkKarmicDebt(day, lifePath.rawSums);
  const forecastText = calculatePersonalYearForecast(month, day, 2026, 3);

  const excessNumbers = [];
  for (let n = 1; n <= 9; n++) {
    if (matrix.counts[n] >= 3) {
      excessNumbers.push({
        number: n, count: matrix.counts[n]
      });
    }
  }

  const missingNumbers = [];
  for (let n = 1; n <= 9; n++) {
    if (matrix.counts[n] === 0) {
      missingNumbers.push({ number: n });
    }
  }

  const compatibleNumbers = buildCompatibilityNumbers(lifePath.number, missingNumbers);
  const lucky = CONFIG.NUMEROLOGY.LUCKY_ITEM_MAP[lifePath.number] || CONFIG.NUMEROLOGY.LUCKY_ITEM_MAP[11];
  const luckyNumbers = CONFIG.NUMEROLOGY.LUCKY_NUMBERS_MAP[lifePath.number] || CONFIG.NUMEROLOGY.LUCKY_NUMBERS_MAP[11];

  let matrixSummary = [];
  for (let i = 1; i <= 9; i++) {
    matrixSummary.push(`${i}:${matrix.counts[i]}`);
  }

  return {
    name: normalized.name,
    gender: normalized.gender,
    dob: normalized.dob,
    parsingUsage: normalized.usage,

    lifePath: lifePath.number,
    lifePathName: lifePathInfo.name,
    dayNumber: dayNumber,
    matrixSummary: matrixSummary.join(" | "),
    excessNumbers: excessNumbers.map(e => `${e.number} x${e.count}`).join(", "),
    missingNumbers: missingNumbers.map(m => m.number).join(", "),
    karmicDebt: karmicDebt,
    forecastText: forecastText,
    compatibleNumbers: compatibleNumbers,
    luckyColor: lucky.color,
    luckyStone: lucky.stone,
    luckyNumbers: luckyNumbers.join(", ")
  };
}

// ==========================================
// 2. AI GENERATION (5-PART SEQUENTIAL)
// ==========================================
function generateSequentialReport(data, apiKey) {

  const SYSTEM_PROMPT = `
  ROLE: You are an elite, highly intuitive 50-year-old Mongolian Shaman Woman (Далд хүчтэй шуламлаг эмэгтэй).
  LANGUAGE: Proper old Mongolian Cyrillic ONLY.
  NATIVE MONGOLIAN SENTENCE STRUCTURE (CRITICAL): Do NOT use literal English translations like "Энэ нь ... болгодог" (It makes you) or passive voice. Use native Subject-Object-Verb structures. E.g., instead of "Энэ нь таныг хүчтэй болгоно", use "Таны заяанд буусан энэ эрчим танд үлэмж их хүчийг хайрлажээ". Write poetically, richly, like an ancient storyteller.
  STRICT RULE: NEVER use foreign words like "Энерги", "Матриц", "Код", "Стресс", "Романтик", "Бизнес". Replace them with "Эрчим/Увдис", "Хүснэгт/Зураг", "Төөрөг", "Шаналал", "Ялдам", "Үйл хэрэг".
  TONE: Mystical, deep, wise, highly descriptive, philosophical. Use words like "Бөлгөө", "Увдис", "Эрчим", "Тэнгэрийн таалал", "Үйлийн үр".

  >>> MASTER RULES (STRICTLY ENFORCED): <<<
  1. ZERO META-TALK: NEVER use phrases like "Энэ хэсэгт бид...", "Дүгнэж хэлэхэд...". Start immediately.
  2. GENDER SPECIFIC (CRITICAL): The user is a ${data.gender}. If "Эрэгтэй", address him as "Зоригт эр минь", "Хүү минь", or "Хүчит эр". If "Эмэгтэй", address her as "Охин минь", "Бүсгүй үр минь". NEVER use redundant mistakes like "Эрэгтэй хүү" or "Эмэгтэй охин".
  3. MASSIVE LENGTH REQUIREMENT: You MUST expand deeply. Do not just summarize. Each requested concept must have its own long, rich paragraph diving into the past life impact, present situation, and future potential. Write AT LEAST 5-6 long paragraphs per part to make the report extremely detailed (12+ pages total).
  4. STRICT EMOJI RULE: EVERY SINGLE PARAGRAPH (except headers) MUST start with EXACTLY ONE emoji. ZERO exceptions.
  5. STRICT FORMATTING: NO Markdown headers (#), NO Markdown bold (**text**). Return ONLY PLAIN TEXT.
  6. DO NOT CUT OFF: You must end with a complete sentence. Never leave the final sentence unfinished.
  `;

  // 1st CALL: Foundation
  const prompt1 = `
  ${SYSTEM_PROMPT}
  TASK: Write PART 1 ONLY (Love DNA & Archetype).

  DATA:
  - Төрсөн огноо: ${data.dob}
  - Хүйс: ${data.gender}
  - Амьдралын зам: ${data.lifePath} (${data.lifePathName})
  - Өдрийн тоо: ${data.dayNumber}
  - Тоон хүснэгт (Матриц биш): ${data.matrixSummary}
  - Илүүдэл давтамжтай тоо: ${data.excessNumbers || "байхгүй"}

  INSTRUCTIONS: Begin exactly with "Нэгдүгээр бүлэг. СЭТГЭЛИЙН УГСУУР: Хайрын Зөн Ба Увдис" on its own line.
  Expand deeply into their mystical archetype based on their Life Path. Write a rich philosophical intro about destiny before analyzing numbers. Explain every single "excess number" in deep detail—its gift and its curse in love. Explain their "Love Language" based on their Day Number using poetic scenarios. Produce at least 6 long paragraphs.

  STYLE GUIDE REFERENCE:
  ${CONFIG.REFERENCES.PART_1}
  `;
  const r1 = callGeminiAPI(prompt1, apiKey, CONFIG.TEMPERATURE);

  // 2nd CALL: Karma & Danger
  const prompt2 = `
  ${SYSTEM_PROMPT}
  TASK: Write PART 2 ONLY (Karma & Single Status Diagnosis).

  DATA:
  - Кармын өр (Үйлийн үрийн өр): ${data.karmicDebt}
  - Дутуу тоо (Эрчмийн цоорхой): ${data.missingNumbers || "байхгүй"}

  INSTRUCTIONS: Begin exactly with "Хоёрдугаар бүлэг. ГАНЦААРДЛЫН ҮНДЭС: Үйлийн Үр Ба Цоорхой" on its own line.
  Dive deeply into past-life karma. Explain their Karmic Debt (if none, describe the purity of a white path). For EACH "missing number", write a separate long paragraph explaining how this "gap" manifests in their childhood, adult relationships, and deepest fears. Describe the "Danger Energies" (toxic matches) with terrifyingly accurate psychological depth. Produce at least 6 long paragraphs.

  STYLE GUIDE REFERENCE:
  ${CONFIG.REFERENCES.PART_2}
  `;
  const r2 = callGeminiAPI(prompt2, apiKey, CONFIG.TEMPERATURE);

  // 3rd CALL: Avatar
  const prompt3 = `
  ${SYSTEM_PROMPT}
  TASK: Write PART 3 ONLY (Future Soulmate Avatar).

  DATA:
  - Дутуу тоо: ${data.missingNumbers || "байхгүй"}
  - Ээлтэй учрах өдрүүдийн тоо: ${data.compatibleNumbers}

  INSTRUCTIONS: Begin exactly with "Гуравдугаар бүлэг. ЗАЯАНЫ ХАНИЙН ДҮР: Тэнгэрээс Зурсан Зураг" on its own line.
  Paint a vivid, cinematic picture of their perfect soulmate. Describe their calming aura. Write extensively about their profession, mindset, and moral compass (not just a job title, but how they view the world). Explain why the "Compatible Numbers" are the specific keys to healing their soul. Describe their physical appearance, the feeling of their gaze, and the familiarity of their presence. Produce at least 5 long paragraphs.

  STYLE GUIDE REFERENCE:
  ${CONFIG.REFERENCES.PART_3}
  `;
  const r3 = callGeminiAPI(prompt3, apiKey, CONFIG.TEMPERATURE);

  // 4th CALL: Forecast
  const prompt4 = `
  ${SYSTEM_PROMPT}
  TASK: Write PART 4 ONLY (3-Year Forecast).

  DATA:
  - 3 жилийн төөрөг/мөчлөг: ${data.forecastText}

  INSTRUCTIONS: Begin exactly with "Дөрөвдүгээр бүлэг. ХУВЬ ЗОРИЛГЫН ГУРВАН ЖИЛ: Цагийн Хүрд" on its own line.
  Use the EXACT years and numbers provided in the data. Do not just state the forecast, but narrate it like an unfolding epic over 2026, 2027, and 2028. What inner transformations happen? What kind of encounters occur? Dedicate at least one massive paragraph to each year. Write beautifully about the specific spiritual/intellectual places they will meet this person. Produce at least 5 long paragraphs.

  STYLE GUIDE REFERENCE:
  ${CONFIG.REFERENCES.PART_4}
  `;
  const r4 = callGeminiAPI(prompt4, apiKey, CONFIG.TEMPERATURE);

  // 5th CALL: Remedy
  const prompt5 = `
  ${SYSTEM_PROMPT}
  TASK: Write PART 5 ONLY (Success Key & Remedy).

  DATA:
  - Азын өнгө: ${data.luckyColor}
  - Азын чулуу: ${data.luckyStone}

  INSTRUCTIONS: Begin exactly with "Тавдугаар бүлэг. АМЖИЛТЫН ТҮЛХҮҮР: Далд Увдисын Дом" on its own line.
  Give a deep, psychological, and spiritual strategy to break their loneliness. Provide a profound morning affirmation/mantra with instructions on how to say it. Explain how to use their lucky colors and stones as protective talismans in daily life. End with a long, powerful, tear-jerking shamanic blessing for their future marriage. Produce at least 5 long paragraphs.

  STYLE GUIDE REFERENCE:
  ${CONFIG.REFERENCES.PART_5}
  `;
  const r5 = callGeminiAPI(prompt5, apiKey, CONFIG.TEMPERATURE);

  // P2 FIX: Verify that all 5 parts were generated successfully (Quality Gate)
  if (r1.text.length < 300 || r2.text.length < 300 || r3.text.length < 300 || r4.text.length < 300 || r5.text.length < 300) {
      throw new Error("AI тайлангийн аль нэг хэсгийг хэт богино эсвэл хоосон гаргасан байна. Дахин оролдоно уу.");
  }

  return {
    text: r1.text.trim() + "\n\n" + r2.text.trim() + "\n\n" + r3.text.trim() + "\n\n" + r4.text.trim() + "\n\n" + r5.text.trim(),
    usage: (r1.usage||0) + (r2.usage||0) + (r3.usage||0) + (r4.usage||0) + (r5.usage||0)
  };
}

// ==========================================
// 3. API & SAFE PDF DELIVERY ENGINE
// ==========================================
function callGeminiAPI(prompt, apiKey, temp, requireJson = false) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${CONFIG.GEMINI_MODEL}:generateContent?key=${apiKey}`;

  let payload = {
    "contents": [{ "parts": [{ "text": prompt }] }],
    "generationConfig": { "temperature": temp, "maxOutputTokens": 8192 },
    "safetySettings": [
        { "category": "HARM_CATEGORY_HARASSMENT", "threshold": "BLOCK_ONLY_HIGH" },
        { "category": "HARM_CATEGORY_HATE_SPEECH", "threshold": "BLOCK_ONLY_HIGH" },
        { "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT", "threshold": "BLOCK_ONLY_HIGH" },
        { "category": "HARM_CATEGORY_DANGEROUS_CONTENT", "threshold": "BLOCK_ONLY_HIGH" }
    ]
  };

  if (requireJson) payload.generationConfig.responseMimeType = "application/json";

  const maxAttempts = 3;
  let lastErrorMsg = "";

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    const res = UrlFetchApp.fetch(url, { "method": "post", "contentType": "application/json", "payload": JSON.stringify(payload), "muteHttpExceptions": true });

    if (res.getResponseCode() === 429 || res.getResponseCode() >= 500) {
        lastErrorMsg = res.getContentText();
        Utilities.sleep(attempt * 2000);
        continue;
    }

    try {
        const json = JSON.parse(res.getContentText());
        if (json.candidates && json.candidates[0].content) {
            const finishReason = json.candidates[0].finishReason;
            if (finishReason === 'MAX_TOKENS' || finishReason === 'SAFETY') {
                throw new Error(`AI хариу дутуу тасарлаа (Шалтгаан: ${finishReason})`);
            }

            return {
                text: json.candidates[0].content.parts[0].text,
                usage: json.usageMetadata ? json.usageMetadata.totalTokenCount : 0
            };
        }
        lastErrorMsg = res.getContentText();
    } catch(e) {
        lastErrorMsg = e.toString() + " | " + res.getContentText();
        Utilities.sleep(attempt * 2000);
    }
  }

  throw new Error(`Gemini API Error after ${maxAttempts} attempts: ${lastErrorMsg}`);
}

function createPdfSafely(name, content, templateId, folderId) {
  const targetFolder = DriveApp.getFolderById(folderId);
  const copyFile = DriveApp.getFileById(templateId).makeCopy(`${name} - ${CONFIG.PRODUCT_NAME}`, targetFolder);
  const copyId = copyFile.getId();

  const doc = DocumentApp.openById(copyId);
  const body = doc.getBody();
  
  body.replaceText("(?i){{name}}", name);
  
  let cleanText = content.replace(/\*/g, "");
  cleanText = cleanText.replace(/^#+\s/gm, "");

  const paragraphs = cleanText.split(/\n+/);
  for (let i = 0; i < paragraphs.length; i++) {
    let pText = paragraphs[i].trim();
    if (pText.length > 0) {
      const firstCharMatch = pText.match(/^[\u{1F300}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}\u{1F200}-\u{1F2FF}]/u);
      let firstEmoji = firstCharMatch ? firstCharMatch[0] : "";
      let noEmojiText = pText.replace(/[\u{1F300}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}\u{1F200}-\u{1F2FF}]/gu, "");
      paragraphs[i] = (firstEmoji + " " + noEmojiText).trim();
    }
  }
  
  let insertionIndex = -1;
  let textAttributes = {};
  
  const searchResult = body.findText("(?i){{\\s*report\\s*}}");

  if (searchResult) {
    const element = searchResult.getElement();
    const textElement = element.asText();
    textAttributes = textElement.getAttributes();
    const paragraphToReplace = element.getParent();
    insertionIndex = body.getChildIndex(paragraphToReplace);
    // Google Docs does not allow removing the last paragraph in a section.
    // Instead of removing the parent entirely right now, clear its text.
    paragraphToReplace.asText().setText("");
  } else {
    insertionIndex = body.getNumChildren() - 1;
  }
  
  for (let i = paragraphs.length - 1; i >= 0; i--) {
    let pText = paragraphs[i].trim();
    if (pText.length > 0) {
        let p = body.insertParagraph(insertionIndex, pText);
        let pTextElement = p.editAsText();

        if (textAttributes[DocumentApp.Attribute.FONT_FAMILY]) {
            pTextElement.setFontFamily(textAttributes[DocumentApp.Attribute.FONT_FAMILY]);
        }
        if (textAttributes[DocumentApp.Attribute.FONT_SIZE]) {
            pTextElement.setFontSize(textAttributes[DocumentApp.Attribute.FONT_SIZE]);
        }

        if (pText.length > 50) {
            p.setAlignment(DocumentApp.HorizontalAlignment.JUSTIFY);
        }

        if (pText.includes("бүлэг.")) {
            pTextElement.setBold(true);
            if (textAttributes[DocumentApp.Attribute.FONT_SIZE]) {
                pTextElement.setFontSize(textAttributes[DocumentApp.Attribute.FONT_SIZE] + 2);
            } else {
                pTextElement.setFontSize(14);
            }
            p.setSpacingBefore(20);
            p.setSpacingAfter(10);
        } else {
            p.setLineSpacing(1.5);
            p.setSpacingAfter(10);
        }
    }
  }

  doc.saveAndClose();

  const pdfBlob = copyFile.getAs('application/pdf');
  const pdfFile = targetFolder.createFile(pdfBlob);
  pdfFile.setName(`${name} - Тайлан.pdf`);
  pdfFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

  copyFile.setTrashed(true);
  return { url: pdfFile.getUrl(), fileId: pdfFile.getId() };
}

function sendUChatProven(userNs, pdfUrl, name, token) {
  if (!token) throw new Error("DELIVERY: UChat token байхгүй.");
  if (!userNs) throw new Error("DELIVERY: user_ns хоосон.");

  const msg = CONFIG.UCHAT.DELIVERY_MESSAGE.replace("{{NAME}}", name);
  const btn = CONFIG.UCHAT.DELIVERY_BTN_TEXT;

  const payload = {
    user_ns: String(userNs).trim(),
    data: {
      version: "v1",
      content: { messages: [ { type: "text", text: msg, buttons: [ { type: "url", caption: btn, url: pdfUrl } ] } ] }
    }
  };

  const res = UrlFetchApp.fetch(CONFIG.UCHAT.ENDPOINT, {
    method: "post",
    headers: { Authorization: "Bearer " + token, "Content-Type": "application/json" },
    payload: JSON.stringify(payload), muteHttpExceptions: true
  });

  const status = res.getResponseCode();
  const body = res.getContentText();

  if (status < 200 || status >= 300) throw new Error("DELIVERY HTTP " + status + ": " + body.substring(0, 200));
  const json = JSON.parse(body);
  if (json.status !== "ok" && json.success !== true) throw new Error("DELIVERY API failed: " + JSON.stringify(json));
}

// --- КОДЫН ТӨГСГӨЛ ---
