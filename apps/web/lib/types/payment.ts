export interface PaymentProof {
    id: string
    userId: string
    amount: number
    bankName: string
    transactionId: string
    proofImageUrl: string
    status: 'pending' | 'verified' | 'rejected'
    submittedAt: string
    verifiedAt?: string
    rejectionReason?: string
}

export interface UserSubscription {
    id: string
    userId: string
    status: 'active' | 'inactive' | 'pending'
    startDate: string
    endDate: string
    paymentId: string
}