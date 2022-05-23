import {findUrl} from '../utils/findUrl'

export default function ShortUrlPage() {
  return (<div>Esta es la pagina de short ulr</div>)
}

export async function getServerSideProps({params}) {
  const { shortId } = params

  const longUrl = await findUrl(shortId, 'shortUrl')

  if (!longUrl) {
    return {
      redirect: {
        destination: '/',
      }
    }
  }

  return {
    redirect: {
      destination: longUrl.url,
    }
  }
}
