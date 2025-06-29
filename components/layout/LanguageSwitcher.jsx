"use client"

import React from 'react'
import { Link, usePathname } from '../../lib/navigation'

export function LanguageSwitcher() {
    const pathname = usePathname()
    return (
        <div style={{ margin: '1rem 0' }}>
            <Link href={pathname} locale="en">English</Link> |{' '}
            <Link href={pathname} locale="fr">Français</Link> |{' '}
            <Link href={pathname} locale="es">Español</Link>
        </div>
    )
} 