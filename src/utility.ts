type Payload = {
  formats: {
    mimeType: string;
    qualityLabel: string;
    url: string;
    container: string;
  }[];
  videoDetails: {
    title: string;
    lengthSeconds: string;
    video_url: string;
    thumbnails: { url: string; width: string; height: string }[];
  };
};

export function buildResponseDom(payload: Payload) {
  return `<img
              class="h-auto max-w-xs rounded-md outline outline-3 outline-red-500 dark:outline-white"
              src="${payload.videoDetails.thumbnails[3].url}"
              alt="${payload.videoDetails.title}"
            />

            <h5 class="text-xl font-bold dark:text-white text-center">
              ${payload.videoDetails.title}
            </h5>

            <div class="flex flex-wrap gap-4 items-center">
            ${payload.formats
              .map((format) => {
                return `<a
                href="${format.url}"
                target="_self"
                type="${format.mimeType}"
                download="${payload.videoDetails.title}.mp4"
                data-quality="${format.qualityLabel}"
                data-type="${format.container}"
                class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Download - ${format.qualityLabel}
              </a>`;
              })
              .join(" ")}
            </div>
          `;
}
