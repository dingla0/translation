export function useMT() {
    const translate = async (source: string, sourceLang = "en", targetLang = "ko") => {
      // Stubbed translation, replace with real API later
      return `번역된 결과: ${source}`;
    };
  
    return { translate };
  }
  