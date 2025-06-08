export function useTM(source: string) {
    // Simulated TM matches
    const matches = [
      { text: "This is a translation.", score: 95 },
      { text: "This is an old translation.", score: 82 },
    ];
  
    const getMatches = () => {
      // Later this will query a DB or Elasticsearch
      return matches.filter(m => source.includes("translation"));
    };
  
    return { getMatches };
  }
  