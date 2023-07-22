import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <main className="w-full min-h-screen p-3 bg-gray-300 text-2xl">
            <div className='m-5 p-3 bg-white flex justify-center'>
                <Image src={"/man.jpg"} width={207} height={111} />
            </div>
            <div className='px-3 py-5 grid-center'>
                <div></div>
                <div className='px-5 py-3 bg-blue-600 text-white text-3xl'>Наука и точка.</div>
                <div className='justify-self-end '>
                    <button className='p-3 bg-blue-200 rounded'>Подать заявку</button>
                </div>
            </div>
            <div className=' bg-white p-5'>
                <div className='bg-gray-300 p-3 flex justify-center gap-5'>
                    <Link href={"/"}>
                        <button className='font-bold p-3 bg-yellow-300 text-white hover:opacity-60'>Главная</button>
                    </Link>
                    <Link href={"/"}>
                        <button className='font-bold p-3 bg-yellow-300 text-white hover:opacity-60'>Домой</button>
                    </Link>
                    <Link href={"/second"}>
                        <button className='font-bold p-3 bg-yellow-300 text-white hover:opacity-60'>История секспросвета в России</button>
                    </Link>
                    <Link href={"/"}>
                        <button className='font-bold p-3 bg-yellow-300 text-white hover:opacity-60'>Статьи</button>
                    </Link>
                    <Link href={"/"}>
                        <button className='font-bold p-3 bg-yellow-300 text-white hover:opacity-60'>Контакты</button>
                    </Link>
                </div>
            </div>

            <div className='mt-5 grid w-full grid-custom gap-3'>
                <div className='flex flex-col gap-5'>
                    <h2 className='text-2xl font-bold'>Информация</h2>
                    <p>
                        Тема полового воспитания в России и СССР имела сложную историю. В СССР ее развитие было ограничено государственной идеологией коммунизма, которая ставила в первую очередь задачу формирования коллективистского сознания. Половое воспитание связывалось с предупреждением &quot;буржуазных пороков&quot;, таких как проституция или алкоголизм, и подавлением индивидуальных желаний и эмоций.
                    </p>
                    <p>
                        В России, начиная с 1990-х годов, тема полового воспитания начала развиваться более свободно и открыто. Однако, в современной России, она до сих пор вызывает много споров и дискуссий. Некоторые люди считают, что половое воспитание должно быть частью школьной программы, в то время как другие считают, что это должно оставаться в компетенции семьи.
                    </p>
                    <p>
                        В настоящее время, в России, половое воспитание регулируется законодательством, которое определяет возрастные границы для обучения, а также содержание и формат обучения. Например, в 2013 году был принят <Link className='font-bold underline' href={"https://forms.gle/Lsfppacd7pxdWtHZ7"}>федеральный закон &quot;Об образовании в Российской Федерации&quot; </Link>, который обязывает школы проводить занятия по половому воспитанию.
                    </p>
                    <p>
                        В целом, тема полового воспитания в России и СССР имела и продолжает иметь неоднозначный характер. Однако, несмотря на это, считается, что половое воспитание является необходимой составляющей образования и подготовки к жизни в современном обществе.
                    </p>
                </div>
                <div className='bg-white flex p-3 justify-center'>
                    <div>
                        <Image src={"/man2.jpg"} width={206} height={126} />
                    </div>
                </div>
            </div>

        </main>
    )
}
