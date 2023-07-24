import Image from "next/image";
import Link from "next/link";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { usePathname } from 'next/navigation'
function Layout({ children }) {

    const pathname = usePathname()
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <main className="bg-gray-300 min-h-screen">
                <div className="w-full h-5">

                </div>
                <div className="mb-5 mx-5 flex justify-center p-3 bg-white">
                    <div>
                        <Image src={"/man.jpg"} width={207} height={111} />
                    </div>
                </div>

                <div className="navbar pb-5">
                    <div className="navbar-start" />
                    <div className="navbar-center">
                        <Link href={"/"}>
                            <button className='btn btn-neutral btn-lg'>секс-просвет в России</button>
                        </Link>
                    </div>
                    <div className="navbar-end" >
                        <button onClick={openModal} className="btn">подать заявку</button>
                    </div>
                </div>

                <div className="bg-white p-7">
                    <div className=" bg-gray-300 p-5 flex justify-center gap-3">
                        <Link href={"/"}>
                            <button className='btn btn-ghost'>Главная</button>
                        </Link>
                        <Link href={"/home"}>
                            <button className='btn btn-ghost'>Домой</button>
                        </Link>
                        <Link href={"/article"}>
                            <button className='btn btn-ghost'>Статьи</button>
                        </Link>
                        <Link href={"/story"}>
                            <button className='btn btn-ghost'>История секс-просвета в россии</button>
                        </Link>
                        <Link href={"/contact"}>
                            <button className='btn btn-ghost'>Контакты</button>
                        </Link>
                    </div>
                </div>

                <div className="grid-custom p-5">
                    <div className="px-5 py-5">
                        {children}
                    </div>
                    <div className="flex justify-center bg-white p-5">
                        <div>
                            <Image src={"/man2.jpg"} width={207} height={110} />
                        </div>
                    </div>
                </div>

            </main>
            <footer className="footer footer-center p-10 text-primary-content bg-neutral">
                <div>
                    <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="inline-block fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                    <p className="font-bold">
                        контакты: (89152328998)
                    </p>
                    <p className="font-bold">
                        Лаборатория когнитивной психологии <br /> пользователя цифровых интерфейсов
                    </p>
                    <p>Copyright © 2023 - All right reserved</p>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <button onClick={openModal}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></button>
                        <button onClick={openModal}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></button>
                        <button onClick={openModal}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></button>
                    </div>
                </div>
            </footer>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        В разработке
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Данная функция сейчас находится в разработке!
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Ok
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}

export default Layout;