import "@/styles/globals.css";
import Layout from "@/layout/Layout";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { store } from "@/lib/Redux/store";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { MathJaxProvider } from "react-hook-mathjax";
const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {

  const { isFallback, events } = useRouter()

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement({ pageLanguage: 'vi', includedLanguages: 'vi,th,en,fr,ja,zh-CN,ko,lo,km', }, 'google_translate_element')
  }

  useEffect(() => {
    const id = 'google-translate-script';

    const addScript = () => {
      const s = document.createElement('script')
      s.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit')
      s.setAttribute('id', id)
      const q = document.getElementById(id)
      console.log(q)
      if (!q) {
        console.log(1)
        document.body.appendChild(s)
        window.googleTranslateElementInit = googleTranslateElementInit
      }
    }

    const translateIcon = document.querySelector('.goog-te-gadget-icon');
    if (translateIcon) {
      translateIcon.setAttribute('alt', 'Google Translate');
    }

    const removeScript = () => {
      const q = document.getElementById(id)
      if (q) q.remove()
      const w = document.getElementById('google_translate_element')
      if (w) w.innerHTML = ''
    }


    isFallback || addScript()

    events.on('routeChangeStart', removeScript)
    events.on('routeChangeComplete', addScript)

    return () => {
      events.off('routeChangeStart', removeScript)
      events.off('routeChangeComplete', addScript)
    }

  }, [])


  const mathJaxOptions = {
    svg: {
      scale: 1,                      // global scaling factor for all expressions
      minScale: .5,                  // smallest scaling factor to use
      mtextInheritFont: false,       // true to make mtext elements use surrounding font
      merrorInheritFont: true,       // true to make merror text use surrounding font
      mathmlSpacing: false,          // true for MathML spacing rules, false for TeX rules
      skipAttributes: {},            // RFDa and other attributes NOT to copy to the output
      exFactor: .5,                  // default size of ex in em units
      displayAlign: 'center',        // default for indentalign when set to 'auto'
      displayIndent: '0',            // default for indentshift when set to 'auto'
      fontCache: 'local',            // or 'global' or 'none'
      localID: null,                 // ID to use for local font cache (for single equation processing)
      internalSpeechTitles: true,    // insert <title> tags with speech content
      titleID: 0                     // initial id number to use for aria-labeledby titles
    }
  }


  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
      <MathJaxProvider options={mathJaxOptions}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        </MathJaxProvider>
      </QueryClientProvider>
    </Provider>
  );
}
