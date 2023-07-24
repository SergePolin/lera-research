import Link from 'next/link'
function Contact() {
    return (
        <>
            <div className="prose max-w-none">
                <h1 id="-">На какие проекты стоит обратить внимание, если вам интересна тема секс-просвета?</h1>
                <ol>
                    <li><p><strong>“Секспросвет 18+”</strong> — этичный консалтинг в вопросах сексуальности и гендера. Проект, авторы которого отвечают на вопросы пользователей о сексуальности, гендере, отношениях, здоровье, при этом следуя принципам <em>толерантности</em>, <em>экологичности</em> и <em>доказательности</em>.</p>
                    </li>
                    <li><p><strong>“Это разве секс?”</strong> — подкаст, в котором изучают секс и тело и отвечают на сложные вопросы, связанные с сексуальностью.</p>
                    </li>
                    <li><p><strong>Tizzi</strong> — проект, включающий секс-шоп и платформу сексуального просвещения.</p>
                    </li>
                </ol>
                <p className="font-bold">
                    <Link href={"https://docs.google.com/forms/d/e/1FAIpQLSeiTojJyR3jHJQO6-f_GbfB25wBY2OACw73BzWZFa4vnPq0fg/viewform?pli=1"}>
                        <div className="underline">Хочешь стать волонтером - нажимай сюда.</div>
                    </Link>
                </p>
            </div>
        </>
    )
}

export default Contact;