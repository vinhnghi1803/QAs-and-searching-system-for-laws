const ICON_MAPPING = {
  Bao_hiem: 'mdi-shield-check',
  Bat_dong_san: 'mdi-home-city',
  Bo_may_hanh_chinh: 'mdi-account-tie',
  Chung_khoan: 'mdi-chart-line',
  Cong_nghe_thong_tin: 'mdi-laptop',
  Dau_tu: 'mdi-currency-usd',
  Dich_vu_phap_ly: 'mdi-scale-balance',
  Doanh_nghiep: 'mdi-domain',
  Giao_duc: 'mdi-school',
  Giao_thong_Van_tai: 'mdi-car',
  Ke_toan_Kiem_toan: 'mdi-calculator',
  Lao_dong_Tien_luong: 'mdi-briefcase',
  Linh_vuc_khac: 'mdi-dots-horizontal',
  Quyen_dan_su: 'mdi-handshake',
  So_huu_tri_tue: 'mdi-lightbulb',
  Tai_chinh_nha_nuoc: 'mdi-bank',
  Tai_nguyen_Moi_truong: 'mdi-nature',
  The_thao_Y_te: 'mdi-basketball',
  Thue_Phi_Le_Phi: 'mdi-cash-register',
  Thuong_mai: 'mdi-cart',
  Thu_tuc_To_tung: 'mdi-file-document',
  Tien_te_Ngan_hang: 'mdi-cash',
  Trach_nhiem_hinh_su: 'mdi-gavel',
  Van_hoa_Xa_hoi: 'mdi-human-greeting',
  Vi_pham_hanh_chinh: 'mdi-alert-circle',
  Xay_dung_Do_thi: 'mdi-city',
  Xuat_nhap_khau: 'mdi-factory'
}

const mapCategoryIcons = (categories) => {
  return categories.map((category) => ({
    ...category,
    icon: ICON_MAPPING[category.name] || 'mdi-folder-outline' // Icon mặc định
  }))
}

// ROLE CONSTANT
const ROLE_USER = 'ROLE_USER'
const ROLE_ADMIN = 'ROLE_ADMIN'

export { mapCategoryIcons, ROLE_USER, ROLE_ADMIN }
