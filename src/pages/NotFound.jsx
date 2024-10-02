import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const NotFound = () => {

    const { t } = useTranslation('header')
    return (
        <section>
            <div className="container py-20">
                <div className="text-center space-y-5">
                    <h1 className="mb-4 text-6xl font-semibold text-yellow">404</h1>
                    <p className="mb-4 text-lg text-gray-600">{t('oops')}</p>
                    <div className="animate-bounce">
                        <svg className="mx-auto h-16 w-16 text-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                        </svg>
                    </div>
                    <p className="mt-4 text-gray-600">{t('letUsGetYouBack')} <Link to="/" className="text-yellow underline">{t('home')}</Link>.</p>
                </div>
            </div>
        </section >
    )
}

export default NotFound