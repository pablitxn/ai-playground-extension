import axios from "axios"

/**
 * Descarga un archivo y reporta el progreso.
 * @param {string} url - La URL del archivo a descargar.
 * @param {function} onProgress - Callback para reportar el progreso.
 * @returns {Promise<Blob>} - Promesa que resuelve en un Blob del archivo descargado.
 */
export async function downloadModelWithProgress(
  url: string,
  onProgress: (progress: number) => void
) {
  const response = await axios({
    method: "get",
    url: url,
    responseType: "blob",
    onDownloadProgress: (progressEvent) => {
      const {loaded, total} = progressEvent
      if (total) {
        const progress = Math.floor((loaded * 100) / total)
        onProgress(progress)
      }
    }
  })

  return response.data
}
