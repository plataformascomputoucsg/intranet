const API_URL = 'http://172.16.1.115:8080';

async function fetchNews(tipoEvento, seccion) {
  const url = `${API_URL}/api/comunicaciones/especificas?tipoEvento=${tipoEvento}&seccion=${seccion}&tipSitio=1`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.log(`Failed to fetch ${url}: ${res.status}`);
      return [];
    }
    return await res.json();
  } catch (e) {
    console.log(`Error fetching ${url}: ${e.message}`);
    return [];
  }
}

async function findNews(code) {
  const tipos = [1, 2];
  const secciones = [1, 2, 3, 4, 5]; // Check more sections just in case

  for (const tipo of tipos) {
    for (const seccion of secciones) {
      console.log(`Checking tipoEvento=${tipo}, seccion=${seccion}...`);
      const news = await fetchNews(tipo, seccion);
      const found = news.find((n) => n.codigo === code);
      if (found) {
        console.log(`FOUND ${code} in tipoEvento=${tipo}, seccion=${seccion}`);
        console.log(JSON.stringify(found, null, 2));
        return;
      }
    }
  }
  console.log(`News item ${code} NOT FOUND in checked sections.`);
}

findNews(594);
