'use client'

import { FeedbacksMock } from "@components/mocks/feedbacks"
import Image from "next/image"
import { useEffect, useRef } from "react"

const FeedbacksCarousel = () => {

    const feedbacks = useRef(FeedbacksMock)

    useEffect(() => {
        window.onload = () => {
            const event = { target: { id: "feedback3" } }
            feedbackClicked(event)
        }
    }, [])

    const screenCenter = useRef(typeof window !== 'undefined' ? window.innerWidth / 2 : 0)

    function feedbackClicked(event: any) {
        const elementId = event.target.id;
        translateFeedback(elementId)
    }

    function translateFeedback(elementId: string) {
        const feedbackCards = document.querySelectorAll<HTMLElement>(".card-feedback")
        const currentCard = Object.values(feedbackCards).filter(el => el.children[0].id == elementId)[0]

        const centerDistance = screenCenter.current - currentCard.getBoundingClientRect().x
        const elementWidth = screenCenter.current < 760 ? 102 : 153
        const centerPosition = centerDistance - elementWidth;

        const lastCardActive = document.querySelector(".card-active")!
        lastCardActive.classList.remove("card-active")

        currentCard.classList.add("card-active")

        feedbackCards.forEach(el => {
            const currentTransformX = new WebKitCSSMatrix(getComputedStyle(el).transform).m41;
            if (el != currentCard) el.style.transform = `translateX(${currentTransformX + centerPosition}px) scale(0.9)`
            else el.style.transform = `translateX(${currentTransformX + centerPosition}px)`
        })
    }

    return (
        <div className="feedback d-flex overflow-hidden gap-md-5 gap-2 justify-content-center mt-5">
            {
                feedbacks.current.map((feedback, index) => (
                    <div key={feedback.id} onClick={e => feedbackClicked(e)} className={`${feedback.id == 'feedback3' ? 'card-active' : ''} 'position-relative card-feedback  border-green border-green-shadow rounded'`}>
                        <Image role="button" id={feedback.id} className="object-fit-cover rounded" src={feedback.url} fill alt={`Feedback ${index}`} />
                    </div>
                ))
            }
        </div>
    );
}

export default FeedbacksCarousel;