'use client'

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight
} from 'lucide-react'
import { PaginationButton as PaginationBtn } from './pagination-button'
import { useCallback } from 'react'

type PaginationProps = {
  currentPage: number
  totalPages: number
  pageCount?: number
  onPageChange: (page: number) => void
}

function usePagination({
  currentPage,
  totalPages
}: {
  currentPage: number
  totalPages: number
}) {
  const generatePagesArray = useCallback((from: number, to: number) => {
    return [...new Array(to - from)]
      .map((_, idx) => from + idx + 1)
      .filter(page => page > 0)
  }, [])

  const siblingsCount = 2
  const previousPage =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : []
  const nextPages =
    currentPage < totalPages
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, totalPages)
        )
      : []
  const tail = [1]

  return {
    page: currentPage,
    previous: previousPage,
    next: nextPages,
    head:
      currentPage > 2 + siblingsCount
        ? generatePagesArray(0, currentPage - 3)
        : generatePagesArray(0, 2),
    tail,
    total: totalPages
  }
}

export function Pagination({
  totalPages,
  currentPage = 1,
  pageCount = 10,
  onPageChange
}: PaginationProps) {
  const { page, previous, next, head, tail } = usePagination({
    currentPage,
    totalPages
  })

  console.log(head)

  return (
    <div className="w-full flex justify-center items-center gap-4 mt-20">
      <PaginationBtn
        type="icon"
        icon={ChevronsLeft}
        disabled={currentPage === 1}
        onPageChange={() => onPageChange(1)}
      />
      <PaginationBtn
        type="icon"
        icon={ChevronLeft}
        disabled={currentPage === 1}
        onPageChange={() => onPageChange(currentPage - 1)}
      />
      {/* {currentPage > 1 + siblingsCount && (
        <>
          <PaginationBtn
            type="page"
            page={1}
            onPageChange={() => onPageChange(1)}
          />
          <PaginationBtn
            type="page"
            page={2}
            onPageChange={() => onPageChange(2)}
          />
          {currentPage > 2 + siblingsCount && <span>...</span>}
        </>
      )} */}
      {previous.map(page => (
        <PaginationBtn
          key={page}
          type="page"
          page={page}
          onPageChange={() => onPageChange(page)}
        />
      ))}
      <PaginationBtn
        type="page"
        page={currentPage}
        isCurrent
        onPageChange={() => {}}
      />
      {next.map(page => (
        <PaginationBtn
          key={page}
          type="page"
          page={page}
          onPageChange={() => onPageChange(page)}
        />
      ))}
      {/* {currentPage + siblingsCount < totalPages && (
        <>
          {currentPage + 1 + siblingsCount < totalPages && <span>...</span>}
          <PaginationBtn
            type="page"
            page={totalPages - 1}
            onPageChange={() => onPageChange(totalPages - 1)}
          />
          <PaginationBtn
            type="page"
            page={totalPages}
            onPageChange={() => onPageChange(totalPages)}
          />
        </>
      )} */}
      <PaginationBtn
        type="icon"
        icon={ChevronRight}
        disabled={currentPage === totalPages}
        onPageChange={() => onPageChange(currentPage + 1)}
      />
      <PaginationBtn
        type="icon"
        icon={ChevronsRight}
        disabled={currentPage === totalPages}
        onPageChange={() => onPageChange(totalPages)}
      />
    </div>
  )
}
