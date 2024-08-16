import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnChanges {

  @Input('pagination') pagination: { skip: number, total: number } = { skip: 0, total: 0};
  @Output() pageChange = new EventEmitter<number>();

  totalPages: number = 1;
  currentPage: number = 1;
  startPage: number = 1;
  endPage: number = 2;
  limit : number = 10
  pages: (number | string)[] = [];

  ngOnChanges(_changes: SimpleChanges): void {
    if (this.pagination) {
      this.updatePagination();
    }
  }

  updatePagination(): void {
    this.pages = [];

    if (this.pagination.total > 0) {
      this.totalPages = Math.ceil(this.pagination.total / this.limit);
      this.currentPage = Math.floor(this.pagination.skip / this.limit) + 1;
      this.startPage = Math.max(2, this.currentPage - 2);
      this.endPage = Math.min(this.totalPages - 1, this.currentPage + 2);

      this.pages.push(1);

      if (this.startPage > 2) {
        this.pages.push('...');
      }

      for (let i = this.startPage; i <= this.endPage; i++) {
        this.pages.push(i);
      }

      if (this.endPage < this.totalPages - 1) {
        this.pages.push('...');
      }

      if (this.totalPages > 1) {
        this.pages.push(this.totalPages);
      }
    }
  }

  onPageClick(page: number | string): void {
    if (typeof page === 'number' && page !== this.currentPage) {
      this.pagination.skip = (page - 1) * this.limit;
      this.pageChange.emit(this.pagination.skip);
      this.updatePagination();
    }
  }

  onPreviousClick(): void {
    if (this.currentPage > 1) {
      this.onPageClick(this.currentPage - 1);
    }
  }

  onNextClick(): void {
    if (this.currentPage < this.totalPages) {
      this.onPageClick(this.currentPage + 1);
    }
  }
}
