import {
  createAlbumAction,
  deleteAlbumAction,
  fetchAlbumAction,
  fetchAlbumListAction,
  updateAlbumAction
} from '@admin/ducks/actions/album'
import { errorWrapper, saveWrapper } from '@admin/ducks/sagas/sagaWrapper'
import { PayloadAction } from '@reduxjs/toolkit'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { apiAdmin } from '~/common/consts/general'
import { del, get, post, postFormData } from '~/common/utils/fetch'
import { CreateGalleryPhotoRequest, GalleryPhoto } from '../types/gallery'

function* fetchAlbumList(action: PayloadAction<{offset: number, limit: number}>) {
  yield errorWrapper(function* () {
    try {
      const res: {data: GalleryPhoto[], total: number} = yield call(get, `${apiAdmin}/gallery?offset=${action.payload.offset}&limit=${action.payload.limit}`)
      yield put({ type: fetchAlbumListAction.SUCCESS, payload: { photos: res.data, total: res.total } })
    } catch (e: unknown) {
      yield put({ type: fetchAlbumListAction.FAILURE })
      throw e
    }
  })
}
  
function* fetchAlbum(action: PayloadAction<{ id: number }>) {
  yield errorWrapper(function* () {
    try {
      const res: GalleryPhoto = yield call(get, `${apiAdmin}/gallery/${action.payload.id}`)
      yield put({ type: fetchAlbumAction.SUCCESS, payload: { photo: res } })
    } catch (e: unknown) {
      yield put({ type: fetchAlbumAction.FAILURE })
      throw e
    }
  })
}
  
function* deleteAlbum(action: PayloadAction<{id: number}>) {
  yield errorWrapper(function* () {
    try {
      yield call(del, `${apiAdmin}/gallery/${action.payload.id}`)
      yield put({ type: deleteAlbumAction.SUCCESS})
    } catch (e: unknown) {
      yield put({ type: deleteAlbumAction.FAILURE})
      throw e
    }
  })
} 
  
function* updateAlbum(action: PayloadAction<FormData>) {
  yield errorWrapper(function* () {
    yield saveWrapper(function* () {
      try {
        yield call(postFormData, `${apiAdmin}/gallery/file`, action.payload)
        yield put({ type: updateAlbumAction.SUCCESS })
      } catch (e: unknown) {
        yield put({ type: updateAlbumAction.FAILURE })
        throw e
      }
    })
  })
}

function* createAlbum(action: PayloadAction<CreateGalleryPhotoRequest>) {
  yield errorWrapper(function* () {
    yield saveWrapper(function* () {
      try {
        yield call(post, `${apiAdmin}/gallery`, action.payload)
        yield put({ type: createAlbumAction.SUCCESS })
      } catch (e: unknown) {
        yield put({ type: createAlbumAction.FAILURE })
        throw e
      }
    })
  })
}
  
function* albumWatcher() {
  yield all([
    takeLatest(fetchAlbumListAction.TRIGGER, fetchAlbumList),
    takeLatest(fetchAlbumAction.TRIGGER, fetchAlbum),
    takeLatest(deleteAlbumAction.TRIGGER, deleteAlbum),
    takeLatest(updateAlbumAction.TRIGGER, updateAlbum),
    takeLatest(createAlbumAction.TRIGGER, createAlbum),
  ])
}
  
export default albumWatcher
