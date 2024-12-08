import { Link } from 'react-router-dom'

export function FeedBackLink() {
    return (
        <Link to='/feedback'
            className='flex justify-end items-end mt-2 mr-4 text-xs text-gray-600'>Send Feedback
        </Link>
    )
}