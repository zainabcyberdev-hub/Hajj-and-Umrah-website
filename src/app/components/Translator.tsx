// "use client";
// import { useEffect } from "react";

// export default function LanguageSwitcher() {
//   useEffect(() => {
//     // Google Translate script inject
//     const addScript = document.createElement("script");
//     addScript.src =
//       "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
//     document.body.appendChild(addScript);

//     // Init function
//     (window as any).googleTranslateElementInit = () => {
//       new (window as any).google.translate.TranslateElement(
//         {
//           pageLanguage: "en",
//           autoDisplay: false,
//         },
//         "google_translate_element"
//       );
//     };
//   }, []);

//   // CSS to hide Google branding + popup
//   useEffect(() => {
//     const style = document.createElement("style");
//     style.innerHTML = `
//       .goog-logo-link, 
//       .goog-te-gadget span, 
//       .goog-te-banner-frame.skiptranslate, 
//       .goog-te-gadget-simple img {
//         display: none !important;
//       }
//       body {
//         top: 0px !important;
//       }
//       .goog-te-gadget {
//         font-size: 0 !important;
//       }
//     `;
//     document.head.appendChild(style);
//   }, []);

//   return (
//     <div className="p-2">
//       {/* Hidden Google Translate dropdown */}
//       <div id="google_translate_element"></div>

//       {/* Custom dropdown for languages */}
//       <select
//         className="px-3 py-2 rounded-lg border border-gray-300 shadow-sm 
//                    text-sm bg-white focus:ring-2 focus:ring-amber-500"
//         onChange={(e) => {
//           const lang = e.target.value;
//           const frame = (document.querySelector(
//             ".goog-te-combo"
//           ) as HTMLSelectElement) || null;
//           if (frame) {
//             frame.value = lang;
//             frame.dispatchEvent(new Event("change"));
//           }
//         }}
//       >
//         <option value="">🌐 Select Language</option>
//         <option value="en">English</option>
//         <option value="ur">Urdu</option>
//         <option value="ar">Arabic</option>
//         <option value="fr">French</option>
//         <option value="tr">Turkish</option>
//       </select>
//     </div>
//   );
// }
